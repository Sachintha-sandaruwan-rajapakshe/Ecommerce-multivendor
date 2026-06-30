export const Maincategory=[
    {
        name:"Men",
        categoryId:"men",
        leval:1,
        levelTwoCategory:[
            {
                "name":"Topwere",
                "categoryId":"men_topwere",
                "parentCategoryId":"men",
                "level":2
            },
            {
                "name":"Bottomwere",
                "categoryId":"men_bottomwere",
                "parentCategoryId":"men",
                "level":2
            }
        ]
    },
    {
        name:"Women",
        categoryId:"women",
        leval:1,
        levelTwoCategory:[
            {
                "name":"Topwere",
                "categoryId":"women_topwere",
                "parentCategoryId":"women",
                "level":2
            },
            {
                "name":"Bottomwere",
                "categoryId":"women_bottomwere",
                "parentCategoryId":"women",
                "level":2
            }
        ]
    },{
    name: "Home & Furniture",
    categoryId: "home_furniture",
    level: 1,
    levelTwoCategory: [
      {
    "name":"Living Room",
    "categoryId":"home_living_room",
    "parentCategoryId":"home_furniture",
    "level":2
},
{
    "name":"Bedroom",
    "categoryId":"home_bedroom",
    "parentCategoryId":"home_furniture",
    "level":2
},
    ]
  },

  {
    name: "Electronics",
    categoryId: "electronics",
    level: 1,
    levelTwoCategory: [
      {
    "name":"Mobiles",
    "categoryId":"electronics_mobiles",
    "parentCategoryId":"electronics",
    "level":2
},
{
    "name":"Laptops",
    "categoryId":"electronics_laptops",
    "parentCategoryId":"electronics",
    "level":2
},
    ]
  }
]