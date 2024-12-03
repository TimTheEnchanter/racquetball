namespace SpriteKind {
    export const Player2 = SpriteKind.create()
}
game.splash("Racquetball", "By James Parrott")
scene.setBackgroundImage(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333d111d33333333333333333333333333333333333d111d33333333333333333333333333333333333d111d33333333333333333333333333333333333d111d3333333333333333333333333
    33333333d1111111d3333333333333333333333333333333d1111111d3333333333333333333333333333333d1111111d3333333333333333333333333333333d1111111d33333333333333333333333
    3333333d111111111d33333333333333333333333333333d111111111d33333333333333333333333333333d111111111d33333333333333333333333333333d111111111d3333333333333333333333
    3333333111111111113d111d33333333333333333333333111111111113d111d33333333333333333333333111111111113d111d33333333333333333333333111111111113d111d3333333333333333
    333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333
    33333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d3333
    33d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d33
    3111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d3
    11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d
    1111111111111111111a5a1111111119111111111111111111111111111a5a1111111119111111111111111111111111111a5a1111111119111111111111111111111111111a5a111111111911111111
    111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111111111111111111133a353a33111119991111111
    3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a3111111111111111a3555553a11111191111113a
    a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5a1111111911111111a55555a11111111111111a5
    3a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a353a3111199911111111a555a11111111111113a35
    55a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a55555a111119111111111a535a1111111111111a555
    5a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a55
    5a11111111111111111111111111111111111a535a11111111111111111111111111111111111a535a11111111111111111111111111111111111a535a11111111111111111111111111111111111a53
    a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3
    1111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa111111111111111111111aa11111111111a355aa11111111111
    111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111111111111a35a1111191111a5555aa11aaaaa111
    11111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a1111111111a555a1111999111a55555aaa35555a11
    111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a1111191111a5555533555555a11111aaaaaa555a3111191111a5555533555555a11
    11a555533955a1111111111a3555555995555a1111a555533955a1111111111a3555555995555a1111a555533955a1111111111a3555555995555a1111a555533955a3111111111a3555555995555a11
    11a5555555553a111111111aa55555599555aa1111a5555555553a311111111aa55555599555aa1111a5555555553a311111111aa55555599555aa1111a5555555553a311111111aa55555599555aa11
    11aa5555555553a11111111aa55555555553a31111aa5555555553a11111111aa55555555553a11111aa5555555553a31111111aa55555555553a11111aa5555555553a11111111aa55555555553a111
    111aa5555555555a111111aa355555555553aa11113aa5555555555a111111aa355555555553aa11111aa5555555555a111111aa355555555553aa11111aa5555555555a111111aa355555555553aa11
    111aa55555555555a1111aa55555555555553aa1113aa55555555555a1111aa55555555555553aa1111aa55555555555a1111aa55555555555553aa1111aa55555555555a1111aa55555555555553aa1
    11aa55555555555aaa11a35555555555555555a313aa55555555555aaa11a35555555555555555a111aa55555555555aaa11a35555555555555555a111aa55555555555aaa11a35555555555555555a1
    11a555555555553a39aa3555555555555555553399a555555555553a39aa3555555555555555553399a555555555553a39aa3555555555555555553311a555555555553a39aa35555555555555555533
    31a5555555553aaa993a5555555555555555539939a5555555553aaa993a5555555555555555539939a5555555553aaa993a5555555555555555539939a5555555553aaa993a55555555555555555399
    3333555335553339999a355555555555555533993333555335553339999a355555555555555533993333555335553339999a355555555555555533993333555335553339999a35555555555555553399
    9333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa355555555539999333aaaa35553335599a333aaa35555555553999
    9333399aa55999955993aaaaaaa55555333339999333399aa55999955993aaaaaaa55555333339999333399aa55999955993aaaaaaa55555333339999333399aa55999955993aaaaaaa5555533333999
    99999399aa5999999999999a9aa55555a999999999999399aa5999999999999a9aa55555a999999999999399aa5999999999999a9aa55555a999999999999399aa5999999999999a9aa55555a9999999
    999933999aa399999999999393a55553a3999999999933999aa399999999999393a55553a3999999999933999aa399999999999393a55553a3999999999933999aa399999999999393a55553a3999999
    9993339999933999999999939335555a333999999993339999933999999999939335555a333999999993339999933999999999939335555a333999999993339999933999999999939335555a33399999
    9933399999933999999993339333553399339999993339999993399999999333933355339933999999333999999339999999933393335533993399999933399999933999999993339333553399339999
    9933999999939999999993399933333999339999993399999993999999999339993333399933999999339999999399999999933999333339993399999933999999939999999993399933333999339999
    9993999999939993399993999999339999399933999399999993999339999399999933999939993399939999999399933999939999993399993999339993999999939993399993999999339999399933
    3993999999939933339993999999999999399333399399999993993333999399999999999939933339939999999399333399939999999999993993333993999999939933339993999999999999399333
    3333999999933333333993999999999999333399333399999993333333399399999999999933339933339999999333333339939999999999993333993333999999933333333993999999999999333399
    3333999999933399933333999999999999333999333399999993339993333399999999999933399933339999999333999333339999999999993339993333999999933399933333999999999999333999
    9999999999999999993339999999999999999999999999999999999999333999999999999999999999999999999999999933399999999999999999999999999999999999993339999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999991119999999999999999999999999999999999999111999999999999999999999999999999999999911199999999999999999999999999999999999991119999999999
    9999999999999999999999999111111199999999999999999999999999999999911111119999999999999999999999999999999991111111999999999999999999999999999999999111111199999999
    9999999999999999999999991111111119999999999999999999999999999999111111111999999999999999999999999999999911111111199999999999999999999999999999991111111119999999
    9999999999999999999999911111111111991119999999999999999999999991111111111199111999999999999999999999999111111111119911199999999999999999999999911111111111991119
    1999999999999999999999911111111111911111199999999999999999999991111111111191111119999999999999999999999111111111119111111999999999999999999999911111111111911111
    1999911111199999999999911111111111111111199991111119999999999991111111111111111119999111111999999999999111111111111111111999911111199999999999911111111111111111
    1991111111111999999119991111111111111111199111111111199999911999111111111111111119911111111119999991199911111111111111111991111111111999999119991111111111111111
    1911111111111199911111191111111111111111191111111111119991111119111111111111111119111111111111999111111911111111111111111911111111111199911111191111111111111111
    1111111111111119111111119111111111111111111111111111111911111111911111111111111111111111111111191111111191111111111111111111111111111119111111119111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
let lastHitBall = 0
if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.One))) {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`paddle1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 0)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y = 110
}
if (mp.isConnected(mp.playerSelector(mp.PlayerNumber.Two))) {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`paddle2`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 0)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y = 110
}
