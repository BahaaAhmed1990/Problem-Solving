class UriBuilder {
    constructor(url) {
        const [base, queryString] = url.split('?')
        // console.log(base)
        // console.log(query)
        this.params = {};
        this.base = base;

        if (queryString) {
            // for test on codewar
            queryString.split('&').forEach(query => {
                const [key, value] = query.split('=')
                this.params[decodeURIComponent(key)] = decodeURIComponent(value)
            });
            // const query = new URLSearchParams(queryString)
            // for (const [key, value] of query) {
            //     this.params[key] = value
            // }
        }
    }

    // log method
    print() {
        console.log(this.params)
    }

    build() {
        let enteris = Object.entries(this.params);
        if (enteris.length === 0) return this.base;
        const query = enteris.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&')
        return `${this.base}?${query}`
    }

}

const builder = new UriBuilder('https://codewar.com?a=0')

builder.params.page = 1
builder.params.lang = "js"
// builder.print()
console.log(builder.build())
builder.params.page = 2
console.log(builder.build())

delete builder.params.page
console.log(builder.build())
