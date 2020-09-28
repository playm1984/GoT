export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    getResourses = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResourses('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }
    getCharacter = async (id) => {
        const character = await this.getResourses(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    getAllHouses = async () => {
        const houses = await this.getResourses('/houses/');
        return houses.map(this._transformHouse);
    }
    getHouse = async (id) => {
        const house = await this.getResourses(`/houses/${id}`);
        return this._transformHouse(house)
            ;
    }
    getAllBooks = async () => {
        const books = await this.getResourses('/books/');
        return books.map(this._transformBook);
    }
    getBook = async (id) => {
        const book = await this.getResourses(`/books/${id}`);
        return this._transformBook(book);
    }
    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overload: house.overload,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}