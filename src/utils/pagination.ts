// create current url
type ConstructUrlParams = {
    pageNumber:  number;
    search: string;
    pathname: string;
};

export const constructUrl = ({
    pageNumber,
    search,
    pathname
}:ConstructUrlParams): string => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber.toString());

    return `${pathname}?${searchParams.toString()}`;
}

// create previous and next urls
type ConstructPrevOrNextParams = {
    currentPage: number;
    pageCount: number;
    search: string;
    pathname: string;
}

export const constructPrevOrNextUrl = ({currentPage, pageCount, search, pathname}:ConstructPrevOrNextParams): { prevUrl : string; nextUrl: string } => {
    let prePage = currentPage - 1;
    if (prePage < 1) prePage = currentPage;
    const prevUrl = constructUrl({ pageNumber: prePage, search, pathname})

    let nextPage = currentPage + 1;
    if (nextPage > pageCount) nextPage = 1;
    const nextUrl = constructUrl({ pageNumber: nextPage, search, pathname})

    return { prevUrl, nextUrl };
}