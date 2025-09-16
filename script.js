const shit_input = document.getElementById('shit-input')

let random_thing = "Cupcake ipsum dolor sit amet. Shortbread chupa chups gummies chupa chups lemon drops pastry wafer tootsie roll. Pastry sweet roll halvah sweet roll muffin cake chupa chups lollipop sweet. Tootsie roll biscuit brownie pudding gummi bears cotton candy chupa chups gummi bears topping. Cupcake tart pastry tart tootsie roll gummies chocolate bar apple pie. Jelly-o candy muffin apple pie cake sweet. Wafer chocolate bar candy sweet roll cookie marshmallow cheesecake bonbon halvah. Ice cream sugar plum cake sugar plum danish. Dessert chocolate candy canes topping dessert macaroon. Marzipan cupcake pastry caramels marshmallow chocolate cake. Danish fruitcake tiramisu caramels liquorice chocolate cake gummi bears. Oat cake marshmallow halvah marzipan gingerbread liquorice marzipan jelly dessert. Cookie candy canes marzipan sugar plum cupcake cheesecake muffin pudding macaroon."

shit_input.addEventListener('keydown', (event) => {
    if (!(event.ctrlKey || event.altKey || event.metaKey)) {
        if (/^[0-9a-zA-Z ]$/.test(event.key)) {
            event.preventDefault();

            if (shit_input.value.length < random_thing.length) {
                shit_input.value += random_thing[shit_input.value.length]
            }
        }
    }
});