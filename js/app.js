const { createApp } = Vue

createApp( {
    data() {
        return {
            status: 'start', // start | started | finished
            vidaJogador: 50,
            vidaMonstro: 80,
            logs: []
        }
    },
    methods: {
        reset() {
            this.vidaJogador = 100
            this.vidaMonstro = 100
            this.logs = []
        },
        iniciar() {
            this.status = 'started'
            this.reset()
        },
        reiniciar() {
            this.status = 'start'
            this.reset()
        }
    }
} ).mount( '#app' )