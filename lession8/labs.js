const app = angular.module("myApp",[]);
function myFunction($scope){
    $scope.data =[
        {
            id: 1,
            nameProduct: "Tuf Gaming",
            price: 1000000,
            sale: true,
            image:"https://hanoicomputercdn.com/media/product/250_78896_laptop_asus_gaming_tuf_fa507nu_lp131w___2_.jpg",
            category: "As",
            rate: 5,
            description: "Sản phẩm bán chạy"
        },
        {
            id: 2,
            nameProduct: "HP Gaming",
            price: 2000000,
            sale: false,
            image:"https://hanoicomputercdn.com/media/product/250_80877__gu605mi_qr116w_oled.jpg",
            category: "HP",
            rate: 6,
            description: "Sản phẩm tồn"
        },
        {
            id: 3,
            nameProduct: "Dell Gaming",
            price: 3000000,
            sale: true,
            image:"https://hanoicomputercdn.com/media/product/250_80569_laptop_hp_gaming_victus_16_r0127tx__8c5n2pa___1_.jpg",
            category: "De",
            rate: 2,
            description: "Sản phẩm bán tồn"
        },
        {
            id: 4,
            nameProduct: "MSI Gaming",
            price: 4000000,
            sale: true,
            image:"https://hanoicomputercdn.com/media/product/250_80858_laptop_lenovo_gaming_loq_15iax9__83gs000rvn_.jpg",
            category: "Ac",
            rate: 8,
            description: "Sản phẩm bán chạy"
        },
        {
            id: 5,
            nameProduct: "ROG Gaming",
            price: 5000000,
            sale: true,
            image:"https://hanoicomputercdn.com/media/product/250_76296_laptop_gigabyte_gaming_g5__mf_f2ph333sh___4_.jpg",
            category: "As",
            rate: 9,
            description: "Sản phẩm bán chạy"
        },
        {
            id: 6,
            nameProduct: "Lenovo Gaming",
            price: 6000000,
            sale: true,
            image:"https://hanoicomputercdn.com/media/product/250_71035_laptop_msi_gaming_cyborg_15_12.png",
            category: "Le",
            rate: 3,
            description: "Sản phẩm khuyến mãi"
        },
        {
            id: 7,
            nameProduct: "Macbook",
            price: 7000000,
            sale: true,
            image:"https://hanoicomputercdn.com/media/product/250_71766_laptop_lg_gram_14z90r_6.png",
            category: "Ap",
            rate: 8,
            description: "Sản phẩm bán chạy"
        },
        {
            id: 8,
            nameProduct: "Microsoft Gaming",
            price: 8000000,
            sale: true,
            image:"https://hanoicomputercdn.com/media/product/250_61328_apple_macbook_pro_14_4.jpg",
            category: "Mi",
            rate: 5,
            description: "Sản phẩm khuyến mãi"
        }
    ]
}
app.controller("myController",myFunction)