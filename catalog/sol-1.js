var s = `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

<prod><name>chair</name><prx>100</prx><qty>20</qty></prod>

<prod><name>fan</name><prx>50</prx><qty>8</qty></prod>

<prod><name>wire</name><prx>10.8</prx><qty>15</qty></prod>

<prod><name>battery</name><prx>150</prx><qty>12</qty></prod>

<prod><name>pallet</name><prx>10</prx><qty>50</qty></prod>

<prod><name>wheel</name><prx>8.80</prx><qty>32</qty></prod>

<prod><name>extractor</name><prx>105</prx><qty>17</qty></prod>

<prod><name>bumper</name><prx>150</prx><qty>3</qty></prod>

<prod><name>ladder</name><prx>112</prx><qty>12</qty></prod>

<prod><name>hoist</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>platform</name><prx>65</prx><qty>21</qty></prod>

<prod><name>car wheel</name><prx>505</prx><qty>7</qty></prod>

<prod><name>bicycle wheel</name><prx>150</prx><qty>11</qty></prod>

<prod><name>big hammer</name><prx>18</prx><qty>12</qty></prod>

<prod><name>saw for metal</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>wood pallet</name><prx>65</prx><qty>21</qty></prod>

<prod><name>circular fan</name><prx>80</prx><qty>8</qty></prod>

<prod><name>exhaust fan</name><prx>62</prx><qty>8</qty></prod>

<prod><name>window fan</name><prx>62</prx><qty>8</qty></prod>`

function catalog(s, article) {
    // your code
    let list = '';
    let lisArr = s.split('\n')
        .filter(line => line)
        .filter(line => {
            return line.includes(article)
        })

    lisArr.forEach((line, index) => {
        let prod = line.match(/[\w\s]+(?=\<\/name\>)/g)
        let prx = line.match(/[\d+\.]+(?=\<\/prx\>)/g)
        let qty = line.match(/\d+(?=\<\/qty\>)/g)
        // console.log(prod, prx, qty);
        if (lisArr.length === 1 || index === (lisArr.length - 1)) {
            list += `${prod} > prx: $${prx} qty: ${qty}`
        } else {
            list += `${prod} > prx: $${prx} qty: ${qty}\n`
        }
    })

    return list ? list : "Nothing"
}

// console.log(catalog(s, 'ladder'))//, 'ladder > prx: $112 qty: 12')
console.log(catalog(s, 'saw'))//, 'table saw > prx: $1099.99 qty: 5\r\nsaw > prx: $9 qty: 10\r\nsaw for metal > prx: $13.80 qty: 32')
// console.log(catalog(s, 'wood pallet'))//, 'wood pallet > prx: $65 qty: 21')
