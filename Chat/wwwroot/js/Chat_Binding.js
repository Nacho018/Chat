var vm = new Vue({
    el: "#chat",
    data: {
        isHidden: true,
        btnisHidden: false,
        Consulta: ""
    },

    methods: {

        mostrarform: function () {

            this.isHidden = false;
            this.btnisHidden = true

        },
        cerrarform: function () {

            this.isHidden = true;
            this.btnisHidden = false

        },
    }
});  