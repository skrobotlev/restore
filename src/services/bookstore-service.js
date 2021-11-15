export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Production-ready Microservices',
            author: 'Susan J. Flower',
            price: 35,
            coverImage: 'https://learning.oreilly.com/library/cover/9781491965962/250w/'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 32,
            coverImage: 'https://learning.oreilly.com/library/cover/9781680500264/250w/'
        }
    ];

    getBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700);
        });
    }
}