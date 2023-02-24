const { createApp } = Vue

createApp( {
    data() {
        return {
            status: 'start', // start | started | finished
            vidaJogador: 100,
            vidaMonstro: 100,
            logs: []
        }
    }
} ).mount( '#app' )