export function getQueryParams(params: Record<string, string>) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([key, value]) => {
        searchParams.set(key, value);
    });
    return `?${searchParams.toString()}`;
}

/**
 * Добавление параметров строки запроса в URL
 * @export
 * @param {Record<string, string>} params - Параметры строки запроса
 */
export function addQueryParams(params: Record<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}

export function removeQueryParams(url: string, params: string[]) {
    const urlObject = new URL(url);
    params.forEach((param) => {
        urlObject.searchParams.delete(param);
    });
    return urlObject.toString();
}
