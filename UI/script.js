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


    function NumberValidation (number, min, max) {
        if (typeof number === "number") {
            if (arguments.length >= 2) 
                if (number < min) return false;

            if (arguments.length >= 3) 
                if (number > max) return false;

            return true;
        }
        else return false;
    }

    console.log(NumberValidation("15"));
    console.log(NumberValidation(15));
    console.log(NumberValidation(15, 10));
    console.log(NumberValidation(15, 20));
    console.log(NumberValidation(15, 10, 20));


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
            createdAt: new Date(2021, 0, 2, 12, 30, 0, 0),
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
            createdAt: new Date(2021, 0, 3, 12, 30, 0, 0),
            link: "https://mrsnow.com/",
            vendor: "Mr. Snow",
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
            createdAt: new Date(2021, 0, 4, 12, 30, 0, 0),
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
            createdAt: new Date(2021, 0, 5, 12, 30, 0, 0),
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
            createdAt: new Date(2021, 0, 6, 12, 30, 0, 0),
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
            createdAt: new Date(2021, 0, 7, 12, 30, 0, 0),
            link: "https://mr_snow/",
            vendor: "Mr. Snow",
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
            createdAt: new Date(2021, 0, 8, 12, 30, 0, 0),
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
            createdAt: new Date(2021, 0, 9, 12, 30, 0, 0),
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
            createdAt: new Date(2021, 0, 10, 12, 30, 0, 0),
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
            createdAt: new Date(2021, 0, 2, 12, 30, 0, 0),
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
            createdAt: new Date(2021, 0, 3, 12, 30, 0, 0),
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
            createdAt: new Date(2021, 0, 4, 12, 30, 0, 0),
            link: "https://mrsnow.com/",
            vendor: "Mr. Snow",
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
            createdAt: new Date(2021, 0, 5, 12, 30, 0, 0),
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
            createdAt: new Date(2021, 0, 6, 12, 30, 0, 0),
            link: "https://mrsnow.com/",
            vendor: "Mr. Snow",
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
            createdAt: new Date(2021, 0, 7, 12, 30, 0, 0),
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
            createdAt: new Date(2021, 0, 8, 12, 30, 0, 0),
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
            createdAt: new Date(2021, 0, 9, 12, 30, 0, 0),
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
            createdAt: new Date(2021, 0, 10, 12, 30, 0, 0),
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


    function getAds (skip, top, filterConfig) {
        if (skip === undefined) skip = 0;
        if (top === undefined) top = 10;
        var resultArray = [];

        for (var i = 0; i < adList.length; i++) {
            var flag = true;

            for (var str in filterConfig) {
                if (str == "date") {
                    if (filterConfig.date.since > adList[i].createdAt ||
                        filterConfig.date.till < adList[i].createdAt)
                        flag = false;
                        break;
                }
                else {   
                    if (adList[i][str] != filterConfig[str]) {
                        flag = false;
                        break;
                    }
                }
            }

            if (flag) resultArray.push(adList[i]);
        }
        
        resultArray.sort(function (a, b) {
            return b.createdAt.getTime() - a.createdAt.getTime();
        });

        return resultArray.slice(skip, skip + top);
    };

    console.log(getAds());
    console.log(getAds(0, 5));
    console.log(getAds(5, 5));
    console.log(getAds(0, 10, {
        vendor: "Mr. Snow"
    }));
    console.log(getAds(0, 10, {
        vendor: "Mr. Snow", 
        link: "https://mrsnow.com/"
    }));
    console.log(getAds(0, 10, {
        vendor: "Mr. Snow", 
        link: "https://mrsnow.com/",
        date: {
            since: new Date(2021, 0, 3, 10),
            till: new Date(2021, 0, 4, 20)
        }
    }));
}());