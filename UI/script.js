window.addEventListener('load', function () {
    adList = [
        {
            id: "1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "7",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "8",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "9",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "10",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "11",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "12",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "13",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "14",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "15",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "16",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "17",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "18",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "19",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        },
        {
            id: "20",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            createdAt: new Date(2021, 0, 1, 12, 30, 0, 0),
            link: "https://azure.microsoft.com/",
            vendor: "Microsoft Azure",
            photoLink: "pic.png",
            hashTags: [
                "hashtag1", "hashtag2"
            ],
            discount: "12%",
            validUntil: new Date(2021, 5, 1, 10, 0, 0, 0),
            rating: 4.8,
            reviews: []
        }
    ];
});