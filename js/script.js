async function getCountriesInfo() {
  const url = 'https://restcountries.com/v2/all'
  try {
    let response = await fetch(url)
    let data = await response.json()
    var countries = document.getElementById('countries')

    data.map(countr => {
      let nativeName = countr.nativeName
      let region = countr.region
      let flag = countr.flags.png
      let name = countr.name
      let capital = countr.capital || ""
      let subregion = countr.subregion

      let card = document.createElement('div')
      card.classList.add('card')

      let country = document.createElement('div')
      country.classList.add('flip')

      let frontCard = document.createElement('div')
      frontCard.classList.add('front__card')

      let backCard = document.createElement('div')
      backCard.classList.add('back__card')

      let countryName = document.createElement('p')
      let countryNameContent = document.createTextNode(name)
      countryName.appendChild(countryNameContent)
      countryName.classList.add('country__name')

      let countryNativeName = document.createElement('p')
      let countryNativeNameContent = document.createTextNode(
        `Nome nativo: ${nativeName}`
      )
      countryNativeName.appendChild(countryNativeNameContent)

      let countryCapital = document.createElement('p')
      let countryCapitalContent = document.createTextNode(`Capital: ${capital}`)
      countryCapital.appendChild(countryCapitalContent)

      let countryRegion = document.createElement('p')
      let countryRegionContent = document.createTextNode(`Região: ${region}`)
      countryRegion.appendChild(countryRegionContent)

      let countrySubregion = document.createElement('p')
      let countrySubregionContent = document.createTextNode(
        `Sub-região: ${subregion}`
      )
      countrySubregion.appendChild(countrySubregionContent)

      let countryFlag = document.createElement('img')
      countryFlag.setAttribute('src', flag)
      countryFlag.classList.add('countryFlag')

      backCard.appendChild(countryName)
      backCard.appendChild(countryNativeName)
      backCard.appendChild(countryCapital)
      backCard.appendChild(countryRegion)
      backCard.appendChild(countrySubregion)
      frontCard.appendChild(countryFlag)
      country.appendChild(frontCard)
      country.appendChild(backCard)
      card.appendChild(country)

      switch (region) {
        case 'Africa':
          card.classList.add('africa')
          return
        case 'Americas':
          card.classList.add('americas')
          break
        case 'Asia':
          card.classList.add('asia')
          break
        case 'Europe':
          card.classList.add('europe')
          break
        case 'Oceania':
          card.classList.add('oceania')
          break
      }

      countries.appendChild(card)
    })
  } catch (e) {
    console.log(e)
  }
}

getCountriesInfo()
