const { createApp } = Vue

createApp( {
    data() {
        return {
            status: 'start',
            vidaJogador: 100,
            vidaMonstro: 100,
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
        },
        random( min, max ) {
            min = Math.ceil( min )
            max = Math.floor( max )
            return Math.floor( Math.random() * ( max - min ) + min )
        },
        ataqueJogador( valorMaximoAtaqueJogador=10 ) {
            const valorAtaqueJogador = this.random( 1, valorMaximoAtaqueJogador )
            const valorAtaqueMonstro = this.random( 1, 15 )

            this.vidaMonstro -= valorAtaqueJogador
            this.vidaJogador -= valorAtaqueMonstro

            this.logs.push( `O jogador atacou com ${ valorAtaqueJogador }` )
            this.logs.push( `O monstro atacou com ${ valorAtaqueMonstro }` )
        },
        curarJogador() {
            const valorCuraJogador = this.random( 1, 15 )
            const valorAtaqueMonstro = this.random( 1, 15 )

            this.vidaMonstro -= 0
            this.vidaJogador += valorCuraJogador
            this.vidaJogador -= valorAtaqueMonstro

            this.logs.push( `O jogador recuperou ${ valorCuraJogador } de vida` )
            this.logs.push( `O monstro atacou com ${ valorAtaqueMonstro }` )
        }
    },
    computed: {
        resultado() {
            if ( !this.vidaJogador ) {
                return 'Você Perdeu'
            }

            if ( !this.vidaMonstro ) {
                return 'Você Ganhou'
            }

            return ''
        }
    },
    watch: {
        vidaJogador( newVidaJogador, oldVidaJogador ) {
            if ( newVidaJogador <= 0 ) {
                this.vidaJogador = 0
                this.status = 'finished'
            } else if ( newVidaJogador >= 100 ) {
                this.vidaJogador = 100
            }
        },
        vidaMonstro( newVidaMonstro, oldVidaMonstro ) {
            if ( newVidaMonstro <= 0 ) {
                this.vidaMonstro = 0
                this.status = 'finished'
            }
        }
    }
} ).mount( '#app' )