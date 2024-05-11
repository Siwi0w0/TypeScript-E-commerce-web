// create current url
type ConstructUrlParams = {
    pageNumber:  number;
    search: string;
    pathname: string;
};

export const constructUrl = ({pageNumber, search, pathname}:ConstructUrlParams): string => {
    return '/products';
}

// create previous and next urls
type ConstructPrevOrNextParams = {
    currentPage: number;
    pageCount: number;
    search: string;
    pathname: string;
}

export const constructPrevOrNextUrl = ({currentPage, pageCount, search, pathname}:ConstructPrevOrNextParams): { prevUrl : string; nextUrl: string } => {
    const prevUrl = '/products'
    const nextUrl = '/products'
    return { prevUrl, nextUrl };
}