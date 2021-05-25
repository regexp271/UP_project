;(function () {
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


    class AdList {
        static #objectStructure = {
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
                type: "string",
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
        #ads = [];

        static validateAd (adItem) {
            if (typeof adItem != "object") return false;
    
            for (var str in this.#objectStructure) {
                if (adItem[str] === undefined) {
                    if (!this.#objectStructure[str].optional)
                        return false;
                }
                else {
                    if (this.#objectStructure[str].type === "string") {
                        if (typeof adItem[str] != "string") return false;
    
                        if (this.#objectStructure[str].maxLength != undefined)
                            if (adItem[str].length > this.#objectStructure[str].maxLength)
                                return false;
                    }
                    else if (this.#objectStructure[str].type === "Date") {
                        var temp = DateValidation(adItem[str]);
                        if (temp === null) return false;
                        adItem[str] = temp;
                    }
                    else if (this.#objectStructure[str].type === "Array") {
                        if (typeof adItem[str] != "object") return false;
                    }
                    else if (this.#objectStructure[str].type === "number") {
                        if (!NumberValidation(adItem[str], 
                                              this.#objectStructure[str].minValue, 
                                              this.#objectStructure[str].maxValue)) return false;
                    }
                }
            }
    
            return true;
        }

        get size () {
            return this.#ads.length;
        }
        //-----------------------------------------
        constructor (adList) {
            this.addAll(adList);
        }

        addAll (adList) {
            var invalid = [];

            for (var i = 0; i < adList.length; i++) {
                if (AdList.validateAd(adList[i]))
                    this.#ads.push(adList[i]);
                else invalid.push(adList[i]);
            } 

            return invalid;
        }
        getPage (skip, top, filterConfig) {
            if (skip === undefined) skip = 0;
            if (top === undefined) top = 10;
            var resultArray = [];
    
            for (var i = 0; i < this.#ads.length; i++) {
                var flag = true;
    
                for (var str in filterConfig) {
                    if (str == "date") {
                        if (filterConfig.date.since > this.#ads[i].createdAt ||
                            filterConfig.date.till < this.#ads[i].createdAt)
                            flag = false;
                            break;
                    }
                    else {   
                        if (this.#ads[i][str] != filterConfig[str]) {
                            flag = false;
                            break;
                        }
                    }
                }
    
                if (flag) resultArray.push(this.#ads[i]);
            }
            
            resultArray.sort(function (a, b) {
                return b.createdAt.getTime() - a.createdAt.getTime();
            });
    
            return resultArray.slice(skip, skip + top);
        };
        add (adItem) {
            if (AdList.validateAd(adItem)) {
                this.#ads.push(adItem);
                return true;
            }
            else return false;
        }
        get (id) {
            for (var i = 0; i < this.#ads.length; i++)
                if (this.#ads[i].id === id)
                    return this.#ads[i];
    
            return null;
        }

        edit (id, adItem) {
            for (var i = 0; i < this.#ads.length; i++) {
                if (this.#ads[i].id === id) {
                    var temp = {};
                    Object.assign(temp, this.#ads[i]);
                    Object.assign(temp, adItem);
    
                    if (AdList.validateAd(temp)) {
                        this.#ads[i] = temp;
                        return true;
                    }
                    else return false;
                }
            }
    
            return false;
        }
        remove (id) {
            for (var i = 0; i < this.#ads.length; i++) {
                if (this.#ads[i].id === id) {
                    this.#ads.splice(i, 1);
                    return true;
                }
            }
    
            return false;
        }
        clear () {
            this.#ads.splice(0, this.#ads.length);
        }
    }
    

    var test = {
        id: 20,
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
    };
    console.log(AdList.validateAd(test));
    test.id = "20";
    console.log(AdList.validateAd(test));
    test.createdAt = {};
    console.log(AdList.validateAd(test));
    test.createdAt = new Date(2021, 0, 10, 12, 30, 0, 0);
    console.log(AdList.validateAd(test));


    var adList = new AdList([
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
        }
    ]);
    console.log(adList.size);

    console.log(adList.addAll([
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
            id: 15,
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
            id: 17,
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
        }
    ]));
    console.log(adList.size);

    test.vendor = 3;
    console.log(adList.add(test));
    test.vendor = "Microsoft Azure";
    console.log(adList.add(test));
    console.log(adList.size);

    console.log(adList.getPage());
    console.log(adList.getPage(0, 5));
    console.log(adList.getPage(5, 5));
    console.log(adList.getPage(0, 10, {
        vendor: "Mr. Snow"
    }));
    console.log(adList.getPage(0, 10, {
        vendor: "Mr. Snow", 
        link: "https://mrsnow.com/"
    }));
    console.log(adList.getPage(0, 10, {
        vendor: "Mr. Snow", 
        link: "https://mrsnow.com/",
        date: {
            since: new Date(2021, 0, 3, 10),
            till: new Date(2021, 0, 4, 20)
        }
    }));

    console.log(adList.get("5"));
    console.log(adList.get("25"));

    console.log(adList.edit("21", { id: "20" }));
    console.log(adList.edit("20", { id: 200 }));
    console.log(adList.get("20"), adList.get("200"));
    console.log(adList.edit("20", { id: "200" }));
    console.log(adList.get("20"), adList.get("200"));

    console.log(adList.remove("20"));
    console.log(adList.remove("200"));
    console.log(adList.size);

    adList.clear();
    console.log(adList.size);
}());