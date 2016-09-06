export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'

export function changeCurrentPage(currentPage) {
    return { type: CHANGE_CURRENT_PAGE, currentPage }
}
