const difference = (a, b) => {
  return Math.abs(a - b)
}

export class Location {
  private leftLocations: number[] = [];
  private rightLocations: number[] = [];

  constructor(private data: string[]) {
    data.forEach((location, index) => {
      if (index % 2 === 0) {
        this.leftLocations.push(+location);
      } else {
        this.rightLocations.push(+location);
      }

    })

    this.leftLocations.sort();
    this.rightLocations.sort();

  }

  public calculate1(): number {
    let distance = 0
    const distanceArr = [];
    this.leftLocations.forEach((location, index) => {
      const calculatedDifference = difference(location, this.rightLocations[index])
      distanceArr.push(calculatedDifference)
      distance += calculatedDifference
    })

    return distance;
  }


  public calculate2(): number {
    let similarity = 0
    this.leftLocations.forEach((leftLocation, index) => {
      const count = this.rightLocations.filter(rightLocation => rightLocation === leftLocation).length
      similarity += leftLocation * count
    })

    return similarity;
  }

}