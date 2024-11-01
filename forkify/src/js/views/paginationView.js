import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (evnt) {
      const btn = evnt.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(this._data, numPages);

    // 1. page 1, other pages exists
    if (currentPage === 1 && numPages > 1) {
      return this._renderNext(currentPage);
    }
    // 3. last page

    if (currentPage === numPages && numPages > 1) {
      return this._renderPrev(currentPage);
    }
    // 4. other page, next and prev pages exists
    if (currentPage < numPages) {
      return `${this._renderPrev(currentPage)}${this._renderNext(currentPage)}`;
    }
    // 2. page 1, no other pages exists
    return ``;
  }
  _renderPrev(currentPage) {
    return `<button data-goto="${
      currentPage - 1
    }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>`;
  }
  _renderNext(currentPage) {
    return `<button data-goto="${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
  }
}

export default new PaginationView();
