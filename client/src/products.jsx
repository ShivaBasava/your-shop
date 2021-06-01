const products = [
    {
        id: 1,
        "rating": 5,
        "reviews": [],
        "price": 50000, 
        "countInStock": 6,
        "name": "Apple iPhone XR 128 GB",
        "category": "Electronics",
        "image": "https://i.gadgets360cdn.com/products/large/1536782796_635_iphone_xr.jpg",
        "description": "A new dual-camera system captures more of what you see and love. The fastest chip ever in a smartphone and all-day battery life let you do more and charge less. And the highest-quality video in a smartphone, so your memories look better than ever."
    },
    {
        id: 2,
        "rating": 4.5,
        "reviews": [],
        "price": 5600,
        "countInStock": 7,
        "name": "Mouse Multi-Device Wireless",
        "category": "Electronics",
        "image": "https://resource.logitech.com/w_797,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/mice/m720/m720-feature-06.jpg",
        "description": "The full-sized, contoured shape follows the natural curve of your hand, providing perfect palm support, so you can stay productive longer. This right-handed design also features soft rubber coating so you can work comfortably for long hours — at home or at work."
    },
    {
        id: 3,
        "rating": 5,
        "reviews": [],
        "price": 3600,
        "countInStock": 3,
        "name": "JBL LIVE 200BT Wireless with Bluetooth",
        "category": "Electronics",
        "image": "https://in.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw93ce5d13/Live200_Hero_Black-1605x1605px.png?sw=537&sfrm=png",
        "description": "Introducing the JBL LIVE 200BT Wireless Earphones, ideal for a powerful sound experience whilst providing optimum comfort on the go. The earphones deliver signature sound quality through the wireless streaming capability, with the added benefit of complete hands-free functionality through the seamless integration of a voice assistant. The 8mm dynamic drivers provide a punchy bass performance for greater sound quality and clarity, while battery can handle 10 hours of uninterrupted streaming and can be fully charged in just 2 hours with the fast charge feature."
    },
    {
        id: 4,
        "rating": 3.5,
        "reviews": [],
        "price": 7000,
        "countInStock": 10,
        "name": "Men Shirt Olive Green Regular (Roadster)",
        "category": "Fashion",
        "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13663384/2021/4/20/f65acd0a-c252-40c1-9d15-f59141d739141618911050908-Roadster-Men-Shirts-2111618911049974-1.jpg",
        "description": "Olive Green printed casual shirt, has a mandarin collar, long sleeves, button placket. Olive Green printed casual shirt, has a mandarin collar, long sleeves, button placket. Size & Fit: Regular Fit, The model (height 6') is wearing a size 40, Material & Care, Material: 100% cotton , Machine Wash"
    },
    {
        id: 5,
        "rating": 2.5,
        "reviews": [],
        "price": 11345,
        "countInStock": 30,
        "name": "Laptop Yoga Slim 7 Carbon (13, Intel)",
        "category": "Electronics",
        "image": "https://www.lenovo.com/medias/lenovo-laptop-yoga-slim-7i-carbon-gallery-3.png?context=bWFzdGVyfHJvb3R8NzQ3ODV8aW1hZ2UvcG5nfGhmNC9oN2IvMTE1NTY2OTk1NzAyMDYucG5nfDk3MGVkZWFiMzlhNzU3ZWRlNjU3NmRmMjY5MThmMTRhOTg4OTMwOGU2MmQyMjEzZWI0OTc5MDRhY2ZlMjgwYmU",
        "description": "Co-engineered with Intel®, the Yoga Slim 7i Carbon (13) presents the best of all worlds, combining featherweight portability with ultradurable strength, and featuring the Intel® Evo™ platform for the perfect blend of performance, responsiveness, battery life, and stunning visuals."
    },
    {
        id: 6,
        "rating": 5,
        "reviews": [],
        "price": 11345,
        "countInStock": 30,
        "name": "Speakers Plug-&-Play",
        "category": "Electronics",
        "image": "https://i5.walmartimages.com/asr/9a08fdc4-c1b1-4b9d-b8bf-667d65723f26_1.55b82c605e2b68b17ec55e36dd7add23.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
        "description": "Computer speakers range widely in quality and in price. Computer speakers sometimes packaged with computer systems are small, plastic, and have mediocre sound quality."
    },
    {
        id: 7,
        "rating": 5,
        "reviews": [],
        "price": 1200,
        "countInStock": 4,
        "name": "ZEBRONICS Zeb-Yoga 101 Bluetooth Headset  (Red, In the Ear)",
        "category": "Electronics",
        "image": "https://rukminim1.flixcart.com/image/416/416/khp664w0-0/headphone/p/d/k/zeb-yoga-101-zebronics-original-imafxnkdwzt4gzhg.jpeg?q=70",
        "description": " Model Name Zeb-Yoga 101 Color Red Headphone Type In the Ear Inline Remote Yes Sales Package 1 Headphone, 2 Pair of Earbuds, 2 Pair of Earhooks, Charging Cable, User Manual Connectivity Bluetooth Headphone Design Behind the Neck Product Details Sweat Proof No Foldable/Collapsible Yes Deep Bass Yes Water Resistant No Monaural No Controls Volume Control, Magnetic Switch Control Other Features Magnetic Earpiece, Voice Assistance Support With Microphone Yes Sound Features Impedance 32 Ohms Connectivity Features Bluetooth Version 4.2 Battery Life 7 hrs Charging Time 2 Play Time 7 hrs Standby Time 100 hrs Dimensions Weight 19 g Warranty Domestic Warranty 1 Year Warranty Summary 1 Year Carry into Service Centre Warranty Warranty Service Type Carry-in to Service Centre or Call our Customer Care - 9360942527 Covered in Warranty Manufacturing Defects Not Covered in Warranty Any Physical Damage and Accessories",

    }, {
        id: 8,
        "rating": 5,
        "reviews": [],
        "price": 15000,
        "countInStock": 0,
        "name": "Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)",
        "category": "Electronics",
        "image": "https://images.samsung.com/is/image/samsung/in-galaxy-m51-m515fz-8gb-sm-m515fzbeins--304622793?$684_547_PNG$",
        "description": "Quad camera setup - 64MP (F1.8) main camera + 12MP (F2.2) ultra wide camera + 5MP (F2.4) depth camera + 5MP (F2.4) macro camera and 32MP (F2.2) front camera 16.95 cm (6.7-inch) sAMOLED Plus - Infinity-O display, FHD+ capacitive touchscreen with 1080 x 2400 pixels resolution, Contrast Ratio: 78960:1 Memory, Storage & SIM: 6GB RAM, 128GB internal memory expandable up to 512GB | Dedicated Memory slot Android v10.0 operating system with 2.2GHz+1.8GHz Qualcomm | SD730G octa core processor",

    }, {
        id: 9,
        "rating": 4.25,
        "reviews": [],
        "price": 48000,
        "countInStock": 5,
        "name": "New Inspiron 15 5509 Laptop",
        "category": "Electronics",
        "image": "https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/15_5508_non-touch/in5508nt_cnb_00055lf110_gr.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=668&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=668,402",
        "description": "11th Generation Intel® Core™ i3-1115G4 Processor (6MB Cache, up to 4.1 GHz)  laptop Windows 10 Home Single Language, English  videocard Intel® UHD Graphics with shared graphics memory  memory 8GB, 1x8GB, DDR4, 3200MHz  harddrive 512GB M.2 PCIe NVMe Solid State Drive  color Pebble (Top cover is Pebble color, Base and Palmrest are Black color)",

    }, {
        id: 10,

        "rating": 4.5,
        "reviews": [],
        "price": 4800,
        "countInStock": 5,
        "name": "Pure Cotton Men’s Checked Shirt By NoLogo",
        "category": "Fashion",
        "image": "https://static.cilory.com/450690-thickbox_default/nologo-navy-casual-shirt.jpg",
        "description": "Product Code 87781 Sleeves Full Sleeves Pattern Checks Neck Collar Fit Slim Fabric 100% Cotton Country of Origin India Color Navy Category Shirts",

    }, {
        id: 11,
        "rating": 5,
        "reviews": [],
        "price": 800,
        "countInStock": 7,
        "name": "Logitech M170 Wireless Mouse, Black",
        "category": "Electronics",
        "image": "https://www.reliancedigital.in/medias/Logitech-WIRELESS-MOUSE-M170-491276865-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNDI0NTd8aW1hZ2UvanBlZ3xpbWFnZXMvaGE5L2hiNi85MjAwNjI5NTc5ODA2LmpwZ3xiNjA3ZTI3MDJjYzBmZWEwY2IzNzY0MTAyZTU1MjM3ZTE5ZTc3MzhlNTZhN2ZkOTFjMmNhNmY0MDVmY2FhNTU2",
        "description": "2.4 GHz Wireless connection Shape of the mouse supports hand for comfortable use Wireless range of up to 33 feet",

    }, {
        id: 12,
        "rating": 5,
        "reviews": [],
        "price": 56000,
        "countInStock": 6,
        "name": "Apple iPhone XR 128 GB, Blue (Includes Earpods and Adapter)",
        "category": "Electronics",
        "image": "https://www.reliancedigital.in/medias/Apple-iPhone-XR-128GB-Blue-491488452-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4NzY3NnxpbWFnZS9qcGVnfGltYWdlcy9oODMvaGIwLzkwNTE3MzU1NTYxMjYuanBnfDU4ZTdiOTljNWNhMjA0MDgyZjEyYzkxYzZkZmIzMGE2MTQ1MzVlNDAzOTc5ZjgwMmYyODNhYjhjNzM5ODg5ZDA",
        "description": "ColourBlue Sub-brandiPhone ModelXR BrandApple Phone Hardware & Storage Internal Storage128 GB ProcessorA12 Bionic Chip Phone Build & Convenience Height15.09 cms Width7.57 cms Thickness0.83 cms Weight194 grams Water ResistantYes SensorsBarometer, Accelerometer, Proximity, Ambient Light",

    }
]

export default products