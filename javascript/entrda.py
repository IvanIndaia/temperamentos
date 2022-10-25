def partidas():
    cont = 0
    for r in range(0, rodadas):
        print(f'========== Rodada {r + 1} ==========')
        for j in range(0, jogrod):
            cont += 1
            print(f'Partida {cont}')
            print(f'     JOGO {j}  TIME X TIME')

    
# ========= PROGRAMA PRINCIPAL ===========================================
print('=' * 60)
print('{:^60}'.format('CAMPEONATO - PONTOS CORRIDOS'))
print('=' * 60)

times = list()
qtdTimes = int(input('Digite a quantidade de Times: '))
jogos = rodadas = jogrod = 0
for c in range(1, qtdTimes + 1):
    times.append(str(input(f'Digite o nome do {c}° time: ')))
    if c != qtdTimes:
        jogos += c
print('-' * 60)
print(f'Times do Campeonato = {times}')
print('-' * 60)
print(f'O campeonato terá {jogos} jogos')
print('-' * 60)
rodadas = qtdTimes
if qtdTimes % 2 == 0:
    rodadas += - 1
print(f'O campeonato terá {rodadas} rodadas')
print('-' * 60)
jogrod = int(jogos / rodadas)
print(f'O campeonato terá {jogrod} jogos por rodada')
print('-' * 60)
partidas()
