import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante nao sorteie o proprio nome', () => {

        const participantes = [
            'Catarina',
            'Ana',
            'Frits',
            'Joel',
            'Montes',
            'Frida'
        ]

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })

    })
})