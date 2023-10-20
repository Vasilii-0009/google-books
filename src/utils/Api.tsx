class Api {
  constructor(public url: string) {
    this.url = url;
  }
  _checkResponse(item: Promise<any>) {
    return item.then((item) => {
      if (item.ok) {
        return item.json();
      }
      return Promise.reject(`${item.status}`);
    });
  }

  searhcBooks(value: string[], count: number) {
    const iputValue = value[0];
    const iputCategorie = value[1] ? value[1] : "all";
    const iputSorting = value[2] ? value[2] : "relevance";
    const searhcMovies = fetch(
      `${this.url}&q=${iputValue}+${iputCategorie}&orderBy=${iputSorting}&startIndex=${count}&maxResults=30`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return this._checkResponse(searhcMovies);
  }
}

const DataApi = new Api(
  "https://www.googleapis.com/books/v1/volumes?key=AIzaSyDLFvkm2v9H1fvFv6QKBxA1CDF5kwXsKBU"
);

export { DataApi };
