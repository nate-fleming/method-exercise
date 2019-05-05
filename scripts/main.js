const businessOutput = document.querySelector("#output")

// businesses.forEach(business => {
//     businessOutput.innerHTML += `
//         <h2>${business.companyName}</h2>
//         <address>${business.addressStateCode}</address>
//         <hr>
//     `
// })

const searchInput = document.querySelector("#companySearch")


searchInput.addEventListener("keyup", () => {
    businessOutput.innerHTML = ""

    let input = searchInput.value.toLowerCase()
    if (input) {
        let foundBusiness = businesses.filter(business => {
            return business.purchasingAgent.nameFirst.toLowerCase().includes(input) ||
                business.purchasingAgent.nameLast.toLowerCase().includes(input)
        });

        foundBusiness.forEach(business => {
            businessOutput.innerHTML = `
                    <h2>
                    ${business.companyName}
                    </h2>
                    <section>
                    ${business.purchasingAgent.nameFirst}
                    ${business.purchasingAgent.nameLast}
                    <section>
                    ${business.addressFullStreet}

                    </section>
                    <section>
                    ${business.addressCity},
                    ${business.addressStateCode}
                    ${business.addressZipCode}
                    </section>
                `;

        })

    }
});

const bigSpenders = businesses.filter(business => {
    return business.orders.find(order => {
        return order > 9000
    })
})

console.log(bigSpenders)



// businesses.filter(business => {
//     if (business.addressStateCode === "NY") {
//         businessOutput.innerHTML += `
//         <h2>${business.companyName}</h2>
//         <address>${business.addressStateCode}</address>
//         <hr>
//     `
//     }
// })

// function showBusiness(business) {
//     return `<div>${business.companyName}</div>`
// }

// let stuff = businesses.map(showBusiness)
// businessOutput.innerHTML += stuff.join(`<hr>`)


/////////////////////candies////////////////////////////////

// const candies = [
//     {
//         name: "Lollipop",
//         price: 2.99
//     },
//     {
//         name: "Tootsie Roll",
//         price: 1.49
//     },
//     {
//         name: "Sugar Daddy",
//         price: 2.49
//     }
// ]

// const firstCheapCandy = candies.find(candy => candy.price < 2.00)

// console.log(firstCheapCandy)
//     > { name: "Tootsie Roll", price: 1.49 }

