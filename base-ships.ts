class Spacecraft {

  constructor (public propulsor: string){}

  jumpIntoHyperspace(){
    console.log(`Entering  hyerspace with $(this.propulsor)`)
  }
}

interface Containership {
  cargoContainers: number
}

export {Spacecraft, Containership}
