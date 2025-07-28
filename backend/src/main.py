from typing import Optional, Union
from workers import Response
from fastapi import FastAPI, Query, Path
from pydantic import BaseModel, Field
import uvicorn

def on_fetch(request):
    return Response("Hello World!")


app = FastAPI()


class Book:
    id: int
    title: str
    author: str
    description: str
    rating: int
    published_date: int

    def __init__(self, id, title, author, description, rating, published_date):
        self.id = id
        self.title = title
        self.author = author
        self.description = description
        self.rating = rating
        self.published_date = published_date


class BookRequest(BaseModel):
    id: Optional[int] = Field(
        description='ID is not need on create', default=None)
    title: str = Field(min_length=3)
    author: str = Field(min_length=1)
    description: str = Field(min_length=1, max_length=100)
    rating: int = Field(gt=0, lt=6)
    published_date: int = Field(gt=1999, lt=2031)

    model_config = {
        'json_schema_extra': {
            "example": {
                "title": 'A new book',
                "author": 'codeeded',
                "description": 'awdawdwdwd',
                "rating": 5,
                "published_date": 2029
            }
        }
    }


BOOKS = [
    Book(1, 'wdaawd', 'awdwdrgf', 'grgrgg', 5, 2030),
    Book(2, "greg", "hyuijue", '546', 5, 2030),
    Book(3, "tykjit", "fgdhj", 'hthyjw', 5, 2030),
    Book(4, "bvhgfh", "sefere", 'gfretd', 5, 2030),
    Book(5, "retsf", "fhgfh", 'erfew5r', 5, 2030)
]


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/books/{book_id}")
async def read_book(book_id: int = Path(gt=0)):
    for book in BOOKS:
        if book.id == book_id:
            return book


@app.get("/books/")
async def read_book_by_rating(book_rating: int = Query(gt=0, lt=6)):
    books_to_return = []

    for book in BOOKS:
        if book.rating == book_rating:
            books_to_return.append(book)

    return books_to_return


@app.get('/books')
async def read_all_books():
    return BOOKS


@app.post('/create-book')
async def create_book(book_request: BookRequest):
    # new_book = Book(**book_request.dict())
    new_book = Book(**book_request.model_dump())
    BOOKS.append(find_book_id(new_book))


def find_book_id(book: Book):
    book.id = 1 if len(BOOKS) == 0 else BOOKS[-1].id + 1
    return book


@app.put('/books/update_book')
async def update_book(book: BookRequest):
    for i in range(len(BOOKS)):
        if BOOKS[i].id == book.id:
            BOOKS[i] = book


@app.delete('/books/{book_id}')
async def delete_book(book_id: int = Path(gt=0)):
    for i in range(len(BOOKS)):
        if BOOKS[i].id == book_id:
            BOOKS.pop(i)
            break

if __name__ == "__main__":
    # uvicorn main:app --reload
    uvicorn.run("example:app", host="127.0.0.1", port=8000, log_level="info")
