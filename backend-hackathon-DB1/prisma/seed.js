const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seed = async () => {
    // Create categories
    const soccercleatsCategory = await prisma.category.create({
        data: {
            name: "Soccer cleats",
            imageUrl:
                "https://static.netshoes.com.br/produtos/chuteira-futsal-kappa-phoenix-unissex/08/D24-5692-108/D24-5692-108_zoom1.jpg?ts=1697558034&ims=326x, https://static.netshoes.com.br/produtos/chuteira-futsal-kappa-phoenix-unissex/08/D24-5692-108/D24-5692-108_zoom1.jpg?ts=1697558034&ims=652x",
        },
    });

    const flipflopCategory = await prisma.category.create({
        data: {
            name: "Flip-flop",
            imageUrl:
                "https://static.netshoes.com.br/produtos/chinelo-slide-kappa/02/D24-3564-002/D24-3564-002_zoom1.jpg?ts=1695126139&ims=326x, https://static.netshoes.com.br/produtos/chinelo-slide-kappa/02/D24-3564-002/D24-3564-002_zoom1.jpg?ts=1695126139&ims=652x",
        },
    });

    const sneakersCategory = await prisma.category.create({
        data: {
            name: "Sneakers",
            imageUrl:
                "https://static.netshoes.com.br/produtos/tenis-kappa-mantua/06/D24-6017-006/D24-6017-006_zoom1.jpg?ts=1702896868&ims=326x, https://static.netshoes.com.br/produtos/tenis-kappa-mantua/06/D24-6017-006/D24-6017-006_zoom1.jpg?ts=1702896868&ims=652x",
        },
    });

    const capCategory = await prisma.category.create({
        data: {
            name: "Sneakers",
            imageUrl:
                "https://static.netshoes.com.br/produtos/tenis-kappa-mantua/06/D24-6017-006/D24-6017-006_zoom1.jpg?ts=1702896868&ims=326x, https://static.netshoes.com.br/produtos/tenis-kappa-mantua/06/D24-6017-006/D24-6017-006_zoom1.jpg?ts=1702896868&ims=652x",
        },
    });

    // Create brands
    const nikeBrand = await prisma.brand.create({
        data: {
            name: "Nike",
            imageUrl:
                "https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/7286_nike.png",
        },
    });

    const adidasBrand = await prisma.brand.create({
        data: {
            name: "Adidas",
            imageUrl:
                "https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/405_adidas.png",
        },
    });

    const mizunoBrand = await prisma.brand.create({
        data: {
            name: "Mizuno",
            imageUrl:
                "https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/3585_mizuno.png",
        },
    });

    const pumaBrand = await prisma.brand.create({
        data: {
            name: "Puma",
            imageUrl:
                "https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/6877_puma.png",
        },
    });

    const KappaBrand = await prisma.brand.create({
        data: {
            name: "Kappa",
            imageUrl:
                "https://static.netshoes.com.br/bnn/l_netshoes/2023-10-17/1251_kappa.png",
        },
    });

    // Create products
    const kappaPhoenix = await prisma.product.create({
        data: {
            name: "Kappa Phoenix",
            brand: {
                connect: {
                    id: KappaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chuteira-futsal-kappa-phoenix-unissex/08/D24-5692-108/D24-5692-108_zoom1.jpg?ts=1697558034&ims=326x, https://static.netshoes.com.br/produtos/chuteira-futsal-kappa-phoenix-unissex/08/D24-5692-108/D24-5692-108_zoom1.jpg?ts=1697558034&ims=652x",
            description:
                "Take on the defenders and score the winning goal with the Kappa Phoenix Unisex Futsal Cleats! Perfect for football days with friends, these unisex futsal cleats feature a synthetic upper, rubber sole, lace-up closure, and a modern and bold design that exudes attitude on the pitch. Score that great goal and buy these Kappa futsal cleats now!",
            price: 139.99,
            installment: {
                create: {
                    number: 7,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: soccercleatsCategory.id,
                },
            },
        },
    });

    const kappasanwofnawofna = await prisma.product.create({
        data: {
            name: "Kappa Phoenix",
            brand: {
                connect: {
                    id: KappaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chuteira-futsal-kappa-phoenix-unissex/08/D24-5692-108/D24-5692-108_zoom1.jpg?ts=1697558034&ims=326x, https://static.netshoes.com.br/produtos/chuteira-futsal-kappa-phoenix-unissex/08/D24-5692-108/D24-5692-108_zoom1.jpg?ts=1697558034&ims=652x",
            description:
                "Take on the defenders and score the winning goal with the Kappa Phoenix Unisex Futsal Cleats! Perfect for football days with friends, these unisex futsal cleats feature a synthetic upper, rubber sole, lace-up closure, and a modern and bold design that exudes attitude on the pitch. Score that great goal and buy these Kappa futsal cleats now!",
            price: 139.99,
            installment: {
                create: {
                    number: 7,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: soccercleatsCategory.id,
                },
            },
        },
    });

    const kappaNewJersey = await prisma.product.create({
        data: {
            name: "Kappa New Jersey",
            brand: {
                connect: {
                    id: KappaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chuteira-campo-kappa-new-jersey-unissex/80/D24-5695-180/D24-5695-180_zoom1.jpg?ts=1697557994&ims=326x, https://static.netshoes.com.br/produtos/chuteira-campo-kappa-new-jersey-unissex/80/D24-5695-180/D24-5695-180_zoom1.jpg?ts=1697557994&ims=652x",
            description:
                "Take on the defenders and score the winning goal with the Kappa New Jersey Unisex Field Cleats! Perfect for football days with friends, these unisex field cleats feature a synthetic upper, rubber sole, lace-up closure, and a modern and bold design that exudes attitude on the pitch. Score that great goal and buy these Kappa field cleats now!",
            price: 219.9,
            installment: {
                create: {
                    number: 6,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: soccercleatsCategory.id,
                },
            },
        },
    });

    const adidasPredator = await prisma.product.create({
        data: {
            name: "Adidas Predator 24 Club",
            brand: {
                connect: {
                    id: adidasBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chuteira-campo-adidas-predator-24-club-unissex/93/FB9-4080-793/FB9-4080-793_zoom1.jpg?ts=1713262729&ims=326x, https://static.netshoes.com.br/produtos/chuteira-campo-adidas-predator-24-club-unissex/93/FB9-4080-793/FB9-4080-793_zoom1.jpg?ts=1713262729&ims=652x",
            description:
                "Control and support for you to play with confidence. The adidas Predator 24 Club field cleat combines a breathable and lightweight mesh upper with a grippy sole to ensure precision and comfort in your plays. This unisex adidas cleat allows you to move freely and with agility to enhance your performance in the sport. Get your adidas field soccer cleats and make a difference in the matches!",
            price: 261.89,
            installment: {
                create: {
                    number: 5,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: soccercleatsCategory.id,
                },
            },
        },
    });

    const adidasXCrazyfast = await prisma.product.create({
        data: {
            name: "Adidas X Crazyfast 3",
            brand: {
                connect: {
                    id: adidasBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chuteira-campo-adidas-x-crazyfast-3-unissex/56/FB9-4093-056/FB9-4093-056_zoom1.jpg?ts=1712589498&ims=326x, https://static.netshoes.com.br/produtos/chuteira-campo-adidas-x-crazyfast-3-unissex/56/FB9-4093-056/FB9-4093-056_zoom1.jpg?ts=1712589498&ims=652x",
            description:
                "Dominate the field with the Adidas X Crazyfast 3 Unisex Field Cleats! Partnered with players who like to doodle within the four lines, these Adidas field cleats are developed with strategically positioned studs that provide traction on contact with the turf and allow for quick and precise changes of direction. Additionally, its modern design ensures a bold look during the match. Elevate your game with these Adidas field cleats!",
            price: 549.99,
            installment: {
                create: {
                    number: 10,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: soccercleatsCategory.id,
                },
            },
        },
    });

    const nikeZoomMercurialVapor = await prisma.product.create({
        data: {
            name: "Nike Zoom Mercurial Vapor 15",
            brand: {
                connect: {
                    id: nikeBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chuteira-nike-zoom-mercurial-vapor-15-academy-society/06/JD8-4134-006/JD8-4134-006_zoom1.jpg?ts=1699637145&ims=326x, https://static.netshoes.com.br/produtos/chuteira-nike-zoom-mercurial-vapor-15-academy-society/06/JD8-4134-006/JD8-4134-006_zoom1.jpg?ts=1699637145&ims=652x",
            description:
                "When you lace up the bold Vapor 15 Academy, the field is yours. We've added an entirely new Zoom Air unit, specifically designed for football, so you can dominate in the final minutes of the game. It's lightweight and low to the ground, making you feel like you're floating on the turf, with flexible mesh material on top that helps provide ball control for 90 minutes or more. Welcome to the Field, Zoom. For the first time in our history, Nike has developed an entirely new Zoom Air unit in the heel for football. The unit sits atop the sole and provides an additional level of responsive cushioning for players competing on the toughest surfaces and terrains. Barefoot Sensation. The upper features NikeSkin, a soft and flexible mesh material bonded by a thin coating. It helps provide ball control and truly makes you feel like you're playing barefoot. Direct Your Speed. The speed cage within the structure is made of a thin yet strong material that locks the foot to the sole without adding extra weight for optimal lockdown. Grass Traction. The rubber sole is designed for traction on grass surfaces. Enhanced Fit. A redesigned design improves fit, to better mimic the foot. We did this by conducting multiple wear tests on hundreds of athletes. The result is a more contoured toe box and better heel grip. Product Details - For use on shorter and synthetic surfaces. - Cushioned insole.",
            price: 699.99,
            installment: {
                create: {
                    number: 9,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: soccercleatsCategory.id,
                },
            },
        },
    });

    const nikeBeco = await prisma.product.create({
        data: {
            name: "Nike Beco 2",
            brand: {
                connect: {
                    id: nikeBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chuteira-nike-beco-2-futsal/16/JD8-4975-016/JD8-4975-016_zoom1.jpg?ts=1696004535&ims=326x, https://static.netshoes.com.br/produtos/chuteira-nike-beco-2-futsal/16/JD8-4975-016/JD8-4975-016_zoom1.jpg?ts=1696004535&ims=652x",
            description:
                "With clean lines and a classic look, the Men's Nike Beco 2 (IC) Indoor/Court Soccer Shoe allows your play to speak for itself. A textured rubber sole provides traction on indoor surfaces/courts, while the cushioned toe box delivers reliable touch.",
            price: 299.99,
            installment: {
                create: {
                    number: 4,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: soccercleatsCategory.id,
                },
            },
        },
    });

    const mizunoMoreliaClassic = await prisma.product.create({
        data: {
            name: "Mizuno Morelia Classic",
            brand: {
                connect: {
                    id: mizunoBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chuteira-nike-beco-2-futsal/16/JD8-4975-016/JD8-4975-016_zoom1.jpg?ts=1696004535&ims=326x, https://static.netshoes.com.br/produtos/chuteira-nike-beco-2-futsal/16/JD8-4975-016/JD8-4975-016_zoom1.jpg?ts=1696004535&ims=652x",
            description:
                "Score the winning goal and become the star of the game with the Mizuno Morelia Classic Unisex Society Cleats! Crafted from high-quality materials, these Mizuno society cleats feature an upper with a comfortable and precise fit. The sole offers durability and assists in quick changes of direction, as well as stability during the game. Make your mark on the field and buy these Mizuno unisex cleats now!",
            price: 449.99,
            installment: {
                create: {
                    number: 9,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: soccercleatsCategory.id,
                },
            },
        },
    });

    const mizunoMoreliaNeo = await prisma.product.create({
        data: {
            name: "Mizuno Morelia Neo III",
            brand: {
                connect: {
                    id: mizunoBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chuteira-campo-mizuno-morelia-neo-iii-unissex/38/2FU-7450-038/2FU-7450-038_zoom1.jpg?ts=1695429163&ims=326x, https://static.netshoes.com.br/produtos/chuteira-campo-mizuno-morelia-neo-iii-unissex/38/2FU-7450-038/2FU-7450-038_zoom1.jpg?ts=1695429163&ims=652x",
            description:
                "Score that amazing goal and lead your team to victory with the Mizuno Morelia Neo III Unisex Field Cleats! Featuring a rubber sole that ensures stability during plays, these Mizuno men's field cleats boast a lightweight, durable, and extremely soft upper made of premium kangaroo leather on the front. Score that great goal and buy now!",
            price: 1499.99,
            installment: {
                create: {
                    number: 10,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: soccercleatsCategory.id,
                },
            },
        },
    });

    const pumaFuture = await prisma.product.create({
        data: {
            name: "Puma Future 7 Play",
            brand: {
                connect: {
                    id: pumaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chuteira-society-puma-future-7-play-unissex/44/PI3-1843-044/PI3-1843-044_zoom1.jpg?ts=1710522198&ims=326x, https://static.netshoes.com.br/produtos/chuteira-society-puma-future-7-play-unissex/44/PI3-1843-044/PI3-1843-044_zoom1.jpg?ts=1710522198&ims=652x",
            description:
                "Crie jogadas mágicas e mostre toda a sua habilidade dentro das quatro linhas com a Chuteira Society Puma Future 7 Play Unissex! Ideal para os jogadores que flutuam dentro de campo, essa chuteira society apresenta malha leve e reforçada com uma fina camada que oferece estabilidade, suporte e controle. A sola de borracha permite mobilidade dentro das quatro linhas, já o cabedal leve e flexível garante um arranque rápido pra cima dos defensores. Leve seu jogo para outro nível com essa chuteira society Puma!",
            price: 449.9,
            installment: {
                create: {
                    number: 7,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: soccercleatsCategory.id,
                },
            },
        },
    });

    const pumaUltraMatch = await prisma.product.create({
        data: {
            name: "Puma Ultra Match",
            brand: {
                connect: {
                    id: pumaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chuteira-campo-puma-ultra-match-unissex/93/2I3-9393-793/2I3-9393-793_zoom1.jpg?ts=1710782242&ims=326x, https://static.netshoes.com.br/produtos/chuteira-campo-puma-ultra-match-unissex/93/2I3-9393-793/2I3-9393-793_zoom1.jpg?ts=1710782242&ims=652x",
            description:
                "Define the match when the game ball falls to your feet with the Puma Ultra Match Unisex Field Cleats! Perfect for players seeking agility, these Puma cleats feature an upper that provides an adaptable and supportive fit, ensuring excellent maneuverability during dribbles. Textures designed on the key ball contact zones ensure a soft and precise touch. Have the freedom to create on the field with these Puma field cleats!",
            price: 699.9,
            installment: {
                create: {
                    number: 8,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: soccercleatsCategory.id,
                },
            },
        },
    });

    const kappaSlide = await prisma.product.create({
        data: {
            name: "Flip-flop Slide Kappa",
            brand: {
                connect: {
                    id: KappaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chinelo-slide-kappa/02/D24-3564-002/D24-3564-002_zoom1.jpg?ts=1695126139&ims=326x, https://static.netshoes.com.br/produtos/chinelo-slide-kappa/02/D24-3564-002/D24-3564-002_zoom1.jpg?ts=1695126139&ims=652x",
            description:
                "ATTENTION! Before making the purchase, remove the insole from a well-fitting shoe and measure the length of the insole as shown in image 2. Then, check the measurement below and find the ideal size for you, thus avoiding inconvenience for our customers! Size: 30, Insole Length: 20.3 cm. Size: 30.5, Insole Length: 20.7 cm. Size: 31, Insole Length: 21.0 cm. Size: 31.5, Insole Length: 21.3 cm. Size: 32, Insole Length: 21.7 cm. Size: 33, Insole Length: 22.3 cm. Size: 34, Insole Length: 23.0 cm. Size: 34.5, Insole Length: 23.3 cm. Size: 35, Insole Length: 23.7 cm. Size: 35.5, Insole Length: 24.0 cm. Size: 36, Insole Length: 24.3 cm. Size: 36.5, Insole Length: 24.7 cm. Size: 37, Insole Length: 25.0 cm. Size: 38, Insole Length: 25.7 cm. Size: 39, Insole Length: 26.3 cm.",
            price: 69.8,
            installment: {
                create: {
                    number: 3,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: flipflopCategory.id,
                },
            },
        },
    });

    const adidasAdilette = await prisma.product.create({
        data: {
            name: "Flip-flop Adidas Adilette",
            brand: {
                connect: {
                    id: adidasBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chinelo-adidas-adilette/28/COL-4484-028/COL-4484-028_zoom1.jpg?ts=1711644043&ims=326x, https://static.netshoes.com.br/produtos/chinelo-adidas-adilette/28/COL-4484-028/COL-4484-028_zoom1.jpg?ts=1711644043&ims=652x",
            description:
                "For everyday wear or for hanging out, the Adidas Adilette Slide Sandal brings comfort and personalized fit. The Cloud Foam technology provides support and quick drying. In the Slide model, the Adidas sandal complements relaxed, casual, or urban style. Wear it wherever you want! Did someone say discount?",
            price: 179.99,
            installment: {
                create: {
                    number: 3,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: flipflopCategory.id,
                },
            },
        },
    });

    const adidasSlideAdiiletteShower = await prisma.product.create({
        data: {
            name: "Flip-flop Slide Adidas Adilette Shower",
            brand: {
                connect: {
                    id: adidasBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chinelo-slide-adidas-adilette-shower/10/3ZP-7499-310/3ZP-7499-310_zoom1.jpg?ts=1695700969&ims=326x, https://static.netshoes.com.br/produtos/chinelo-slide-adidas-adilette-shower/10/3ZP-7499-310/3ZP-7499-310_zoom1.jpg?ts=1695700969&ims=652x",
            description:
                "Count on the Adidas Adilette Shower Slide Sandal to be your companion on rest days or for a laid-back look. Crafted in the slide model from soft, durable, and structured material to accompany you with comfort. *For a better fit, we recommend purchasing one size larger than your usual. Fits small. Order yours now!",
            price: 199.87,
            installment: {
                create: {
                    number: 4,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: flipflopCategory.id,
                },
            },
        },
    });

    const nikeSlideVictory = await prisma.product.create({
        data: {
            name: "Flip-flop Slide Nike Victoy",
            brand: {
                connect: {
                    id: nikeBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chinelo-slide-nike-victory-masculino/26/HZM-4654-326/HZM-4654-326_zoom1.jpg?ts=1695421368&ims=326x, https://static.netshoes.com.br/produtos/chinelo-slide-nike-victory-masculino/26/HZM-4654-326/HZM-4654-326_zoom1.jpg?ts=1695421368&ims=652x",
            description:
                "The Nike Victory Men's Slide Sandal is your ally during a light and laid-back everyday. The soft insole provides unparalleled comfort, while the rubber sole ensures grip and traction. The modern print adds a sporty touch to the look. Get this men's Nike slide sandal now!",
            price: 249.99,
            installment: {
                create: {
                    number: 4,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: flipflopCategory.id,
                },
            },
        },
    });

    const nikeOffcoutSlide = await prisma.product.create({
        data: {
            name: "Flip-flop Nike Offcourt Slide",
            brand: {
                connect: {
                    id: nikeBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chinelo-nike-offcourt-slide-masculino/26/HZM-2395-226/HZM-2395-226_zoom1.jpg?ts=1695699335&ims=326x, https://static.netshoes.com.br/produtos/chinelo-nike-offcourt-slide-masculino/26/HZM-2395-226/HZM-2395-226_zoom1.jpg?ts=1695699335&ims=652x",
            description:
                "The Nike OffCourt Slide Men's Sandal is the perfect choice for those seeking comfort during everyday wear. With a lightweight and soft insole, this men's Nike sandal features a rubber sole that ensures grip and traction with every step. Buy now! For a better fit, we recommend purchasing one size larger than your usual. Fits small.",
            price: 329.99,
            installment: {
                create: {
                    number: 4,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: flipflopCategory.id,
                },
            },
        },
    });

    const mizunoMZSlideBasic = await prisma.product.create({
        data: {
            name: "Flip-flop Mizuno MZ Slide Basic",
            brand: {
                connect: {
                    id: mizunoBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chinelo-mizuno-mz-slide-basic-preto-branco/26/2FU-7591-026/2FU-7591-026_zoom1.jpg?ts=1713384375&ims=326x, https://static.netshoes.com.br/produtos/chinelo-mizuno-mz-slide-basic-preto-branco/26/2FU-7591-026/2FU-7591-026_zoom1.jpg?ts=1713384375&ims=652x",
            description:
                "The new Mizuno Slide was developed with additional foam on the inner side of the strap, providing more comfort and softness in contact with the foot. The sole is made of EVA, ensuring greater resistance and durability to the product.",
            price: 136.8,
            installment: {
                create: {
                    number: 2,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: flipflopCategory.id,
                },
            },
        },
    });

    const mizunoSlide = await prisma.product.create({
        data: {
            name: "Flip-flop Mizuno Slide",
            brand: {
                connect: {
                    id: mizunoBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chinelo-mizuno-slide/51/2FU-7617-851/2FU-7617-851_zoom1.jpg?ts=1670937499&ims=326x, https://static.netshoes.com.br/produtos/chinelo-mizuno-slide/51/2FU-7617-851/2FU-7617-851_zoom1.jpg?ts=1670937499&ims=652x",
            description:
                "If you're looking for comfort and style, the slide sandal is the right choice for you, and it comes with a very low price. This model features a soft and comfortable strap on the upper part of the sandal, made of synthetic material, bringing great lightness and softness to your everyday life. Completely designed to focus on your comfort.",
            price: 129.99,
            installment: {
                create: {
                    number: 2,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: flipflopCategory.id,
                },
            },
        },
    });

    const pumaSlidePopcat = await prisma.product.create({
        data: {
            name: "Flip-flop Slide Puma Popcat 20 Bdp",
            brand: {
                connect: {
                    id: pumaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chinelo-slide-puma-popcat-20-bdp/28/2I3-2079-028/2I3-2079-028_zoom1.jpg?ts=1700145623&ims=326x, https://static.netshoes.com.br/produtos/chinelo-slide-puma-popcat-20-bdp/28/2I3-2079-028/2I3-2079-028_zoom1.jpg?ts=1700145623&ims=652x",
            description:
                "With a soft and flexible design, the Puma Popcat 20 Bdp Slide Sandal is perfect for creating that casual and sporty look. In a monochromatic design, it features a wide slide strap, upper detail with the brand logo, and an injected EVA sole for superior cushioning, comfort, and maximum style for your outfits. Go for it! This sandal has a larger fit than standard, consider choosing a size smaller than usual",
            price: 123.4,
            installment: {
                create: {
                    number: 2,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: flipflopCategory.id,
                },
            },
        },
    });

    const pumaSldeLeadcat = await prisma.product.create({
        data: {
            name: "Flip-flop Slide Puma Leadcat 2.0",
            brand: {
                connect: {
                    id: pumaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/chinelo-slide-puma-leadcat-20/26/2I3-5961-026/2I3-5961-026_zoom1.jpg?ts=1695428033&ims=326x, https://static.netshoes.com.br/produtos/chinelo-slide-puma-leadcat-20/26/2I3-5961-026/2I3-5961-026_zoom1.jpg?ts=1695428033&ims=652x",
            description:
                "The Puma Leadcat 2.0 Slide Sandal offers comfort, quality, and plenty of style to make your routine even more enjoyable! Designed in the slide model, the sandal is made entirely of rubber, ensuring a soft step and a snug fit for your feet while walking. The insole has a lightweight texture, and the rubber sole features non-slip grooves, aiding in a grippy, secure, and traction-filled stride. The PUMA brand application on the insole and upper adds a relaxed touch to your look with shorts, skirts, and pants. Get yours now!",
            price: 139.9,
            installment: {
                create: {
                    number: 2,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: flipflopCategory.id,
                },
            },
        },
    });

    const kappaMantua = await prisma.product.create({
        data: {
            name: "Sneakers Jog Kappa",
            brand: {
                connect: {
                    id: KappaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/tenis-kappa-mantua/06/D24-6017-006/D24-6017-006_zoom1.jpg?ts=1702896868&ims=326x, https://static.netshoes.com.br/produtos/tenis-kappa-mantua/06/D24-6017-006/D24-6017-006_zoom1.jpg?ts=1702896868&ims=652x",
            description:
                "Produced in synthetic material, these Kappa sneakers feature an upper with fabric in open weaves for air circulation during the run, and a sole with technology that absorbs impacts, protecting the foot strike cycle.",
            price: 179.99,
            installment: {
                create: {
                    number: 3,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: sneakersCategory.id,
                },
            },
        },
    });

    const kappaAlley = await prisma.product.create({
        data: {
            name: "Sneakers Kappa Alley",
            brand: {
                connect: {
                    id: KappaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/tenis-kappa-alley-unissex/36/D24-4777-036/D24-4777-036_zoom1.jpg?ts=1659696595&ims=326x, https://static.netshoes.com.br/produtos/tenis-kappa-alley-unissex/36/D24-4777-036/D24-4777-036_zoom1.jpg?ts=1659696595&ims=652x",
            description:
                "With the lightness for running and the comfort for everyday wear, the Kappa Alley Sneaker is the perfect choice to fit into your routine. The upper is made of textile material, making the piece lightweight and durable. Its closure system is lace-up, allowing for the ideal fit. It features a wear-resistant rubber sole, increasing comfort and grip. Its insole is removable, facilitating cleaning. Reference: 32186WW.",
            price: 119.9,
            installment: {
                create: {
                    number: 2,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: sneakersCategory.id,
                },
            },
        },
    });

    const adidasResponseRunner = await prisma.product.create({
        data: {
            name: "Sneakers Adidas Response Runner",
            brand: {
                connect: {
                    id: adidasBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/tenis-adidas-response-runner/26/FB9-3696-026/FB9-3696-026_zoom1.jpg?ts=1704294518&ims=326x, https://static.netshoes.com.br/produtos/tenis-adidas-response-runner/26/FB9-3696-026/FB9-3696-026_zoom1.jpg?ts=1704294518&ims=652x",
            description:
                "Style and comfort for running and everyday wear. The adidas Response Runner shoe brings a lightweight and soft sporty design, with a mesh elastic upper that provides a smooth fit and enhances air circulation. The EVA midsole elevates the level of softness, while the rubber outsole ensures traction and durability. Support to accompany you in your runs and versatile style to also wear in casual looks, always with total well-being. Pair with pieces ranging from sporty shorts with a plain or patterned t-shirt to your favorite jeans. Enjoy!",
            price: 299.99,
            installment: {
                create: {
                    number: 4,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: sneakersCategory.id,
                },
            },
        },
    });

    const adidasGrandCourt = await prisma.product.create({
        data: {
            name: "Sneakers Adidas Grand Court 2.0",
            brand: {
                connect: {
                    id: adidasBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/tenis-feminino-adidas-grand-court-20/28/FB8-3540-028/FB8-3540-028_zoom1.jpg?ts=1713369462&ims=326x, https://static.netshoes.com.br/produtos/tenis-feminino-adidas-grand-court-20/28/FB8-3540-028/FB8-3540-028_zoom1.jpg?ts=1713369462&ims=652x",
            description:
                "A classic that maintains its legacy: the adidas Grand Court 2.0 women's sneaker is an updated version of the model that made history with its iconic style. The unmistakable 3 Stripes and the casual sporty design continue to make a difference in the outfit! The upper of this model contains at least 50% recycled materials, an initiative aimed at reducing the environmental impact of production. Dare with combinations, with jeans, cargo pants, midi dress, basic t-shirt, and layering to show your high-level style with Adidas. Enjoy!",
            price: 379.99,
            installment: {
                create: {
                    number: 5,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: sneakersCategory.id,
                },
            },
        },
    });

    const nikeAirMax = await prisma.product.create({
        data: {
            name: "Sneakers Nike Air Max",
            brand: {
                connect: {
                    id: nikeBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/tenis-nike-air-max-masculino/26/HZM-5168-026/HZM-5168-026_zoom1.jpg?ts=1700501038&ims=326x, https://static.netshoes.com.br/produtos/tenis-nike-air-max-masculino/26/HZM-5168-026/HZM-5168-026_zoom1.jpg?ts=1700501038&ims=652x",
            description:
                "Renewed sporty style with the Nike Air Max Men's Sneaker! The synthetic upper provides resistance and durability, while the midsole with Air Max technology offers smooth cushioning for everyday wear. The sporty design adds a distinctive touch to the piece. Get this men's Nike sneaker now!",
            price: 699.99,
            installment: {
                create: {
                    number: 10,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: sneakersCategory.id,
                },
            },
        },
    });

    const nikeAirMaxExcee = await prisma.product.create({
        data: {
            name: "Sneakers Nike Air Max Excee",
            brand: {
                connect: {
                    id: nikeBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/tenis-nike-air-max-excee-masculino/14/JD8-6175-014/JD8-6175-014_zoom1.jpg?ts=1704997692&ims=326x, https://static.netshoes.com.br/produtos/tenis-nike-air-max-excee-masculino/14/JD8-6175-014/JD8-6175-014_zoom1.jpg?ts=1704997692&ims=652x",
            description:
                "Enter the rhythm with the Air Max Excee, which contains subtle touches of new colors for a style that defies time. Inspired by the Air Max 90, this shoe offers a modern twist on a legendary icon through elongated design lines and distorted proportions. Benefits include a mesh and synthetic upper for a layered look that is breathable and durable. Visible through the 3 windows, the Air Max cushioning offers the right amount of support. The low-cut padded collar has a sleek and comfortable look. Product details include stitched overlays, foam midsole, and rubber outsole. Origin of Nike Air Max: The revolutionary Air technology arrived in Nike footwear in 1978. In 1987, the Air Max 1 debuted with visible Air technology in its heel, allowing fans more than just the sensation of Air cushioning - suddenly they could see it. Since then, the latest-generation Air Max sneakers have become a hit among athletes and collectors, offering striking color combinations and lightweight, reliable cushioning.",
            price: 799.99,
            installment: {
                create: {
                    number: 10,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: sneakersCategory.id,
                },
            },
        },
    });

    const mizunoCoolRide = await prisma.product.create({
        data: {
            name: "Sneakers Mizuno Cool Ride 2",
            brand: {
                connect: {
                    id: mizunoBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/tenis-mizuno-cool-ride-2-masculino/06/2FU-9734-006/2FU-9734-006_zoom1.jpg?ts=1711449760&ims=326x, https://static.netshoes.com.br/produtos/tenis-mizuno-cool-ride-2-masculino/06/2FU-9734-006/2FU-9734-006_zoom1.jpg?ts=1711449760&ims=652x",
            description:
                "Rise above your challenges! The Mizuno Cool Ride 2 Sneaker is perfect for keeping up with your run. It ensures comfort and plenty of style. Crafted from durable material, it features an Eva midsole, adjustable lace closure, rubber outsole for grip and durability. Additionally, its upper has knit fabric, ensuring a perfect fit for your feet. Tip: pair it with sporty outfits - workout shorts, tank top, or your favorite printed t-shirt. You deserve the best choices. Get yours now!",
            price: 379.99,
            installment: {
                create: {
                    number: 5,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: sneakersCategory.id,
                },
            },
        },
    });

    const mizunoGlow = await prisma.product.create({
        data: {
            name: "Sneakers Mizuno Glow",
            brand: {
                connect: {
                    id: mizunoBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/tenis-mizuno-glow-feminino/62/2FU-8374-162/2FU-8374-162_zoom1.jpg?ts=1710522071&ims=326x, https://static.netshoes.com.br/produtos/tenis-mizuno-glow-feminino/62/2FU-8374-162/2FU-8374-162_zoom1.jpg?ts=1710522071&ims=652x",
            description:
                "Hit the road for a run with the freedom and comfort that only Mizuno can offer! The Mizuno Glow Women's Sneaker brings a modern and highly breathable design, fitting like a sock. The upper with attached tongue offers a great fit to the feet, with padded lining and easy-fit strap. The midsole provides softness and responsive cushioning, transforming impact into energy with each step, while the grooved rubber outsole brings durability and traction on the street or treadmill. Put on your women's windbreaker, running shorts, and challenge yourself for the best pace with this women's sneaker!",
            price: 379.99,
            installment: {
                create: {
                    number: 7,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: sneakersCategory.id,
                },
            },
        },
    });

    const pumaFlyerRunnerMesh = await prisma.product.create({
        data: {
            name: "Sneakers Puma Flyer Runner Mesh Bdp",
            brand: {
                connect: {
                    id: pumaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/tenis-puma-flyer-runner-mesh-bdp-masculino/06/2I3-9913-006/2I3-9913-006_zoom1.jpg?ts=1712243045&ims=326x, https://static.netshoes.com.br/produtos/tenis-puma-flyer-runner-mesh-bdp-masculino/06/2I3-9913-006/2I3-9913-006_zoom1.jpg?ts=1712243045&ims=652x",
            description:
                "Go further with Puma! The Puma Flyer Flex Bdp Men's Sneaker is a versatile option for athletic footwear to accompany you in running, at the gym, and in everyday life. With a fully mesh upper, this running shoe offers softness and breathability to the feet, while the midsole provides extra comfort and gentle cushioning for each stride. Wear a sports tank top and running shorts to give your best in training. Keep moving with the Puma men's sneaker!",
            price: 329.9,
            installment: {
                create: {
                    number: 4,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: sneakersCategory.id,
                },
            },
        },
    });

    const pumaXRaySquare = await prisma.product.create({
        data: {
            name: "Sneakers Puma X-Ray 2 Square Bdp",
            brand: {
                connect: {
                    id: pumaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/tenis-puma-x-ray-2-square-bdp/16/NWG-1344-216/NWG-1344-216_zoom1.jpg?ts=1714054921&ims=326x, https://static.netshoes.com.br/produtos/tenis-puma-x-ray-2-square-bdp/16/NWG-1344-216/NWG-1344-216_zoom1.jpg?ts=1714054921&ims=652x",
            description:
                "Create stylish and attitude-filled looks with Puma's Casual Sneaker. This low-cut sneaker features a robust upper made of synthetic and textile fabric, with a padded heel and pull tab for easy wear; the laces ensure an effective and personalized fit. The midsole incorporates technology that aids in cushioning and provides a smoother stride, while the rubber outsole ensures grip and traction on different types of surfaces. Dare to mix and match urban outfits for work or leisure with Puma's Sneaker! Enjoy!",
            price: 499.9,
            installment: {
                create: {
                    number: 7,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: sneakersCategory.id,
                },
            },
        },
    });

    const kappaItalia = await prisma.product.create({
        data: {
            name: "Cap Kappa Italia",
            brand: {
                connect: {
                    id: KappaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/bone-kappa-italia-aba-curva-masculino/06/D24-6021-006/D24-6021-006_zoom1.jpg?ts=1703182370&ims=326x, https://static.netshoes.com.br/produtos/bone-kappa-italia-aba-curva-masculino/06/D24-6021-006/D24-6021-006_zoom1.jpg?ts=1703182370&ims=652x",
            description:
                "The Kappa Italy Curved Brim Cap is made of durable fabric, predominantly black. Highly resistant, it features reinforced stitching, contributing to increased durability. The item features a curved brim, the Kappa logo embroidered on the front, as well as the Italian flag embroidered on the side. Its closure is practical and ensures a precise fit to the head. - Official Kappa Product",
            price: 129.9,
            installment: {
                create: {
                    number: 2,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: capCategory.id,
                },
            },
        },
    });

    const kappaSport = await prisma.product.create({
        data: {
            name: "Cap Kappa Sport",
            brand: {
                connect: {
                    id: KappaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/bone-kappa-aba-curva-sport/08/D24-6013-008/D24-6013-008_zoom1.jpg?ts=1702228460&ims=326x, https://static.netshoes.com.br/produtos/bone-kappa-aba-curva-sport/08/D24-6013-008/D24-6013-008_zoom1.jpg?ts=1702228460&ims=652x",
            description:
                "The Kappa Italy Curved Brim Cap is made of durable fabric, predominantly black. Highly resistant, it features reinforced stitching, contributing to increased durability. The item features a curved brim and the Kappa logo embroidered on the front. Its closure is practical and ensures a precise fit to the head. - Official Kappa Product",
            price: 129.9,
            installment: {
                create: {
                    number: 2,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: capCategory.id,
                },
            },
        },
    });

    const adidasHeatReady = await prisma.product.create({
        data: {
            name: "Cap Adidas Heat Ready",
            brand: {
                connect: {
                    id: adidasBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/bone-adidas-aba-curva-heat-ready-unissex-/40/FB9-3715-040/FB9-3715-040_zoom1.jpg?ts=1704297082&ims=326x, https://static.netshoes.com.br/produtos/bone-adidas-aba-curva-heat-ready-unissex-/40/FB9-3715-040/FB9-3715-040_zoom1.jpg?ts=1704297082&ims=652x",
            description:
                "Complete your sporty look with the Adidas Heat Ready Curved Brim Cap! Crafted from lightweight and durable material, this Adidas cap features a strapback closure that allows for a practical and personalized fit. The modern print adds a stylish touch to this unisex Adidas curved brim cap!",
            price: 179.99,
            installment: {
                create: {
                    number: 2,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: capCategory.id,
                },
            },
        },
    });

    const adidasStrapback = await prisma.product.create({
        data: {
            name: "Cap Adidas Strapback Aeroready",
            brand: {
                connect: {
                    id: adidasBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/viseira-adidas-aba-curva-strapback-aeroready/26/3ZP-4535-026/3ZP-4535-026_zoom1.jpg?ts=1695424588&ims=326x, https://static.netshoes.com.br/produtos/viseira-adidas-aba-curva-strapback-aeroready/26/3ZP-4535-026/3ZP-4535-026_zoom1.jpg?ts=1695424588&ims=652x",
            description:
                "Head out for a run with freedom and comfort wearing the Adidas Aeroready Curved Brim Strapback Visor. Crafted from soft material that feels gentle against the skin, it features a curved brim, modern design, and adjustable closure. Get your Adidas visor now and challenge yourself in outdoor sports.",
            price: 148.29,
            installment: {
                create: {
                    number: 2,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: capCategory.id,
                },
            },
        },
    });

    const nikeDriFitFly = await prisma.product.create({
        data: {
            name: "Cap Nike Dri-Fit Fly Swoosh",
            brand: {
                connect: {
                    id: nikeBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/bone-nike-dri-fit-fly-swoosh-unissex/06/JD8-4786-006/JD8-4786-006_zoom1.jpg?ts=1692870933&ims=326x, https://static.netshoes.com.br/produtos/bone-nike-dri-fit-fly-swoosh-unissex/06/JD8-4786-006/JD8-4786-006_zoom1.jpg?ts=1692870933&ims=652x",
            description:
                "From the gym to the trail, to the track - this Nike Fly cap is ready for it all. The 5-panel design with low profile features stretchy fabric that wicks sweat to keep you cool with every move. Its unstructured crown and curved brim are made for immediate comfort, so you can focus on reaching your goals ahead.",
            price: 149.99,
            installment: {
                create: {
                    number: 2,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: capCategory.id,
                },
            },
        },
    });

    const nikeDriFitADV = await prisma.product.create({
        data: {
            name: "Cap Nike Dri-Fit ADV Club",
            brand: {
                connect: {
                    id: nikeBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/bone-nike-dri-fit-adv-club-unissex/14/JD8-5500-014/JD8-5500-014_zoom1.jpg?ts=1697835715&ims=326x, https://static.netshoes.com.br/produtos/bone-nike-dri-fit-adv-club-unissex/14/JD8-5500-014/JD8-5500-014_zoom1.jpg?ts=1697835715&ims=652x",
            description:
                "From the gym to the field and the courts, do it all with the Nike Club Cap. This structured, medium-depth cap features advanced sweat-wicking fabric and strategically placed perforations for a super breathable feel where you need it most. Complete with AeroBill and a flexible closure so you can focus on what matters: reaching your next fitness goal and playing your favorite sport.",
            price: 209.99,
            installment: {
                create: {
                    number: 3,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: capCategory.id,
                },
            },
        },
    });

    const mizunoOsakaNew = await prisma.product.create({
        data: {
            name: "Cap Mizuno Osaka New",
            brand: {
                connect: {
                    id: mizunoBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/bone-aba-curva-mizuno-osaka-new/28/2FU-9670-128/2FU-9670-128_zoom1.jpg?ts=1711043219&ims=326x, https://static.netshoes.com.br/produtos/bone-aba-curva-mizuno-osaka-new/28/2FU-9670-128/2FU-9670-128_zoom1.jpg?ts=1711043219&ims=652x",
            description:
                "Sportiness and comfort for everyday wear. The Mizuno Osaka New cap is a versatile accessory for different occasions, from running to leisure time. This curved brim cap features a mesh back that promotes freshness, along with a snapback adjustment that allows for the perfect fit. A unisex trucker cap to accompany you in your daily activities, always with style and comfort. Get your Mizuno cap now and enjoy!",
            price: 149.99,
            installment: {
                create: {
                    number: 2,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: capCategory.id,
                },
            },
        },
    });

    const mizunoAero = await prisma.product.create({
        data: {
            name: "Cap Mizuno Osaka New",
            brand: {
                connect: {
                    id: mizunoBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/viseira-mizuno-aero/06/2FU-9669-006/2FU-9669-006_zoom1.jpg?ts=1709659448&ims=326x, https://static.netshoes.com.br/produtos/viseira-mizuno-aero/06/2FU-9669-006/2FU-9669-006_zoom1.jpg?ts=1709659448&ims=652x",
            description:
                "More comfort for your outdoor workouts. The Mizuno Aero visor features a lightweight design made of premium fabric, with a curved brim and adjustable contact strap that allows for the perfect fit. This running visor is designed to ensure greater well-being while you move, your ally in the pursuit of better performance in activities. Get your sports visor now and enjoy!",
            price: 119.99,
            installment: {
                create: {
                    number: 2,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: capCategory.id,
                },
            },
        },
    });

    const pumaMetalCatStrapback = await prisma.product.create({
        data: {
            name: "Cap Puma Metal Cat Strapback",
            brand: {
                connect: {
                    id: pumaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/bone-aba-curva-puma-metal-cat-strapback/06/D14-3044-006/D14-3044-006_zoom1.jpg?ts=1695415411&ims=326x, https://static.netshoes.com.br/produtos/bone-aba-curva-puma-metal-cat-strapback/06/D14-3044-006/D14-3044-006_zoom1.jpg?ts=1695415411&ims=652x",
            description:
                "Bet on style! The Puma Metal Cat Curved Brim Cap is perfect to complement your outfits on sunny days. Comfort and protection guaranteed. Made of 100% polyester, it features a curved brim, strapback closure, and mini perforations for better breathability. This unisex cap showcases the metal PUMA logo from the collection. Tip: pair it with casual or sporty looks - sweatpants, chino shorts, jeans, or athletic sneakers. Get yours now!",
            price: 134.9,
            installment: {
                create: {
                    number: 2,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: capCategory.id,
                },
            },
        },
    });

    const pumaSnapbackEssentials = await prisma.product.create({
        data: {
            name: "Cap Puma Snapback Essentials III",
            brand: {
                connect: {
                    id: pumaBrand.id,
                },
            },
            imageUrl:
                "https://static.netshoes.com.br/produtos/bone-aba-curva-puma-snapback-essentials-iii/69/2I3-3756-C69/2I3-3756-C69_zoom1.jpg?ts=1697039863&ims=326x, https://static.netshoes.com.br/produtos/bone-aba-curva-puma-snapback-essentials-iii/69/2I3-3756-C69/2I3-3756-C69_zoom1.jpg?ts=1697039863&ims=652x",
            description:
                "Bet on style! Bringing a super cool urban look, the Puma Curved Brim Cap is perfect to complement your outfits. Made of textile material, it features a curved brim, adjustable Snapback closure, and mini perforations for better breathability. This unisex cap showcases prominent PUMA embroidery. Tip: pair it with sporty or casual looks - denim shorts, athletic sneakers, or your favorite printed t-shirt. You deserve the best choices. Get yours now!",
            price: 104.9,
            installment: {
                create: {
                    number: 2,
                    interestRate: 1.99,
                },
            },
            category: {
                connect: {
                    id: capCategory.id,
                },
            },
        },
    });

    console.log("Data created with success!");
};

seed()
    .catch((error) => {
        console.error("Error creating data:", error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
