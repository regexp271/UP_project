;(function () {
    var objectStructure = {
        id: {
            type: "string",
            optional: false            
        },
        description: {
            type: "string",
            maxLength: 200,
            optional: false
        },
        createdAt: {
            type: "Date",
            optional: false
        },
        link: {
            type: "string",
            optional: false
        },
        vendor: {
            type: "string",
            optional: false
        },
        photoLink: {
            type: "string",
            optional: true
        },
        hashTags: {
            type: "Array",
            optional: false
        },
        discount: {
            optional: false
        },
        validUntil: {
            type: "Date",
            optional: false
        },
        rating: {
            type: "number",
            minValue: 0,
            maxValue: 5,
            optional: true
        },
        reviews: {
            type: "Array",
            optional: true
        }
    };


    function DateValidation (date) {
        if (typeof date === "object") {
            if (date.getTime !== undefined) {
                var ms = date.getTime();

                if (typeof ms === "number")
                    if (ms >= 0)
                        return new Date(ms);
            }
        }

        return null;
    }

    var testDate = {
        getTime: function() {
            return 123456789*1000;
        }
    };
    testDate = DateValidation(testDate);
    if (testDate === null) {
        console.log("invalid");
    }
    else {
        console.log(testDate);
    }


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


    
}());