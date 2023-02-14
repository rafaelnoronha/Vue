const { createApp } = Vue

createApp( {
    data() {
        return {
            mensagem: 'Olá mundo!!'
        }
    }
} ).mount( '#app' )