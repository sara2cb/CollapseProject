class Solutions
{
  constructor()
  {
    this.List = [];
    this.exists = false;
  }

  addYear(years)
  {
    var newArray = years.split(",");
    this.List = newArray;
    this.exists = true;
  }

  getList()
  {
    return this.List;
  }

  getAge()
  {
    if(this.exists)
      return this.List[this.List.length - 2];
    else {
      return 0;
    }
  }

  getRank()
  {
    if(this.exists)
      return this.List[this.List.length - 1];
    else {
      return 0;
    }
  }

}
