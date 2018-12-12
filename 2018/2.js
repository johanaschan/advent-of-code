const part1 = () => {
    const ids = input.split(/\n/);
    let twoTimes = 0;
    let threeTimes = 0;
    for (const id of ids) {
        const frequency = {};
        for (let i = 0; i < id.length; i++) {
            const character = id.charAt(i);
            if (frequency[character]) {
                frequency[character]++;
            } else {
                frequency[character] = 1;
            }
        }

        let countedTwoTimes, countedThreeTimes = false;
        Object.keys(frequency).forEach(key => {
            const count = frequency[key];
            if (!countedTwoTimes && count === 2) {
                countedTwoTimes = true;
                twoTimes++;
            } else if (!countedThreeTimes && count === 3) {
                countedThreeTimes = true;
                threeTimes++;
            }
        });
    }
    return twoTimes * threeTimes;
};

const part2 = () => {
    const ids = input.split(/\n/);
    for (const id of ids) {
        for (const id2 of ids) {
            let differenceCount = 0;
            let differenceIndex;
            for (let i = 0; i < id.length; i++) {
                if (id.charAt(i) !== id2.charAt(i)) {
                    differenceCount++;
                    differenceIndex = i;
                    if (differenceCount > 1) {
                        break;
                    }
                }
            }
            if (differenceCount === 1) {
                return id.substring(0, differenceIndex) + id.substring(differenceIndex + 1);
            }
        }
    }
};

const input = `oiwcdpbseqgxryfmlpktnupvza
oiwddpbsuqhxryfmlgkznujvza
ziwcdpbsechxrvfmlgktnujvza
oiwcgpbseqhxryfmmgktnhjvza
owwcdpbseqhxryfmlgktnqjvze
oiscdkbseqhxrffmlgktnujvza
oiwcdibseqoxrnfmlgktnujvza
oiwcdpbsejhxryfmlektnujiza
oewcdpbsephxryfmlgkwnujvza
riwcdpbseqhxryfmlgktnujzaa
omwcdpbseqwxryfmlgktnujvqa
oiwcdqqneqhxryfmlgktnujvza
oawcdvaseqhxryfmlgktnujvza
oiwcdabseqhxcyfmlkktnujvza
oiwcdpbseqhxryfmlrktrufvza
oiwcdpbseqhxdyfmlgqtnujkza
oiwcdpbseqhxrmfolgktnujvzy
oiwcdpeseqhxnyfmlgktnejvza
oiwcdpbseqhxrynmlaktlujvza
oiwcdpbseqixryfmlektncjvza
liwtdpbseqhxryfylgktnujvza
ouwcdpbszqhxryfmlgktnajvza
oiwzdpbseqhxryfmngktnujvga
wiwcfpbseqhxryfmlgktnuhvza
oiwcdpbselhfryfmlrktnujvza
oywcdpbveqhxryfmlgktnujdza
oiwcdpbsiqhxryfmqiktnujvza
obwcdhbseqhxryfmlgktnujvqa
oitcdpbseqhfryfmlyktnujvza
oiwcdpbseqhxryfmlnutnujqza
oiwcdpbseqhxnyfmlhktnujtza
oiwcdpbseqhbryfmlgkunuwvza
oiwcopbseqhiryfmlgktnkjvza
oiwcdpsseqhxryfklrktnujvza
oiwcdpsrsqhxryfmlgktnujvza
oiwcdpbsyqrxryfmlgktnujvzc
ojwcepbseqhxryfmlgktnujvfa
oiwcdpbseqhxrlfmlgvtnujvzr
oiycdpbsethsryfmlgktnujvza
eiwcdpbseqwxryfmlgktnujcza
oiocdpbseqhxryfxlgktaujvza
qiwydpbseqhpryfmlgktnujvza
ziwcdpbseqhxryfmlgktsuuvza
oiwcdpbseqheryfmygxtnujvza
oiwidpbseqhxryfulgktnujvzm
oiscdpdseqhxryfmlgktnujvya
oiwmypbseqhxryfmlgktnuxvza
oizcwbbseqhxryfmlgktnujvza
oiwcdpbseqpxryfmlgxfnujvza
oiwpdpbscqhxryxmlgktnujvza
oiwcdpbseqhxrifrlgkxnujvza
oiwcdpbsrqhxrifmlgktnzjvza
tiwcdpbseqhxryfmegkvjujvza
oiwcddbseqhxryfingktnujvza
oiwcdpbsiqhiryfmlgktnucvza
oiwcipbseqhxrkfmlgktnuvvza
kiwcdpbseqhxryfmlbkonujvza
qiwcdhbsedhxryfmlgktnujvza
siwcdpbseqhxryfmsgktnujvua
oqwcdpbseqhxryfmlyktndjvza
oiwcqnbseehxryfmlgktnujvza
oiwcdybseqhxryfmlgbtnujvia
oiwcdpbsejhxryfdlgktngjvza
oawcdpbseqhxrbfmlkktnujvza
oilcdpbseqhhrjfmlgktnujvza
oibcdpbseqhxryfmngktnucvza
niwcdpbseqhxryfmlgkuaujvza
oiwcdpbseqhxryfmqgmtnujvha
oiwcdpbseqhcryfxlgktnzjvza
oiwcdpaseqhxryfmqgktnujvzl
oiwcdpbseqhxjyfmlgkonujvzx
oiwmdzbseqlxryfmlgktnujvza
oiwhdpbsexhxryfmlgktnujvzw
oiwctpbseqhxryfmlgktnummza
oiwcdpbseqoxrydmlgktnujvoa
oiwkdpvseqhxeyfmlgktnujvza
oixcdpbsemhxryfmlgctnujvza
oimcdpbseqhxryfmlgktnujvlr
oiwcdpbseehxrywmlgktnejvza
oiwcdpbseqoxhyfmlgktnujyza
oiwcdpbsethxryfmlgktnrjvxa
oiwcdpbxeqhxryfmlgktnrjvzb
ogeadpbseqhxryfmlgktnujvza
eiwcdpbseqhxryfmlgktnvuvza
oiwcdpbseqhxryfmlgktnujaxv
siwcdpbsuqhxryfmlgktnuavza
oixcdpbseqhxryfmlgatnujvzy
oiwcdpbzeghmryfmlgktnujvza
oiwcdpbieqhxryfmlgktyujvzr
oiwcdpbseqhxeyfhlgktngjvza
oiwcdpbseqhjoyrmlgktnujvza
iiwcdpbseqhxryfmwhktnujvza
oixcdpbsiqhxryfmagktnujvza
oiwcdpfljqhxryfmlgktnujvza
oivcdpbseqhxrqfmlgktnujvca
ovwcdpbseqhxzyfmlgkenujvza
oiwxdpgseqhxryfmlgktnhjvza
oibcdpbbeohxryfmlgktnujvza
oiwcrpbseqhxrygmlgwtnujvza
jiwcdpbseqkxryfmlgntnujvza
oiwcdbbseqhxrywmlgktnujvra
oiwcdpbteqyxoyfmlgktnujvza
oiwcdjbsvqvxryfmlgktnujvza
obwcdukseqhxryfmlgktnujvza
oifcdpdseqhxryfmlgktnujsza
oiwcdpbseqhxryfalgktnujyda
oiwcwpbseqhxrnfmkgktnujvza
oswcdpbsethcryfmlgktnujvza
oiwcdpbieqhxryfmlgktnuoiza
oiwcdibsehhxryfmzgktnujvza
oisjdpbseqhxryfmfgktnujvza
oiwcjpbseqkxqyfmlgktnujvza
obwcdpbshqhgryfmlgktnujvza
oiwcspbseqhxryxmlgktnujvzl
oiwcdvbswqhxryfmlgklnujvza
oiwcdhuseqhxryfmlgdtnujvza
oiwcdpbkeqdxryfmlgktnujvzv
oiwcdpzseqhxcyfmlgksnujvza
oiwcdpbseqhxryfmbkkvnujvza
qiwcdpbseqhxrnfmlgktnujvha
okwcdpbseqhxryfmdgktgujvza
oiwcdpbkeqhxryfmldktnujvzu
oiwctpxseqhxgyfmlgktnujvza
oiwcdpbseqhxrykmlgktnujita
oiwcdpbseqhxryfmldktyujnza
oiwcdpbszqhxrjfmlgktnuqvza
oiwcdpbeeqhxrykmlgktnujrza
oiwcvpbseqhxryhmlgwtnujvza
oiwcdpbpeehxryfmlgktnujvzz
oiwcdbbsxqhxyyfmlgktnujvza
oiwkdpbseqhxryfplgktnujeza
opwcdpbseqhxdyfmlgctnujvza
oowcdpbseqhnryfmlgktnujvga
oawzdibseqhxryfmlgktnujvza
oiwcdpbfeqzxrjfmlgktnujvza
oiwcdpbseqaxryfmlgkonulvza
oiacdpbseqvxryfmlgktvujvza
oiwudpbseqhxryfwlgktnujvka
oiwcdpbjeqhxryfymgktnujvza
oiwcdpbweqhxrynmlgktnujaza
oiwcdpbseqdxryfclgvtnujvza
oiwcdppseqhxryfmlgmtzujvza
oiwcdpbseqhxrhfelektnujvza
kiwcdpbsnqhxryfmegktnujvza
oiwcdpbseqpxryfmlgzwnujvza
eiwcdpbseqnxryfplgktnujvza
oiwcdbbseqhxryfmlmktnujvha
oiwcdpbseqhxryfmlgktjhjvka
oiwcdpbseqhxnyfylgktnujvzs
oiwcdpbbxqhxryfmzgktnujvza
opwcdpbseqhfryfmlgktnujzza
oiwcdpbsjqpxryfmtgktnujvza
oiwcdpbseqhyqbfmlgktnujvza
oxwcdpbseqhxrffmlgktiujvza
oiwcdpbseqhxgyfmlgytnujvzq
oiwidpbseqhxryfmlgxtnujvzd
oiwcdpbshqhxryzmlpktnujvza
oifcdpbseqbxryfmlgktdujvza
biwcdzbseqhxtyfmlgktnujvza
oiwcdpbswqhxryfmlgutnujvca
xiwcdpbseqhxryxmlnktnujvza
oiwcdpzseqhxryfrlgktdujvza
oiwudpbseqhxryfmlgkqnurvza
oiwqdpbseihiryfmlgktnujvza
iiwjdpbseqhxryamlgktnujvza
oiwcdplseqhqryfmmgktnujvza
oiwcdppseqhxrmfmlgklnujvza
oiwcdobseqhxryfmmgkttujvza
odwcdpbseqhxryfmlgktnujvyk
oiwcdpkseqhxrhfmlgktntjvza
oiocdpbseqhxryfmlgjknujvza
oiicdpbieqhxryfmlgksnujvza
oiwcdpbseqhxryemlgktnujdla
oiwcdpbseqdxryfmlgktsujvzt
oiwcdcksnqhxryfmlgktnujvza
oowcdpbseqhxryfmlgsfnujvza
oawcdpbseqhxryfmljktnuevza
oiwcdpbsaqhxrffmzgktnujvza
oiwcipbseqhcryfmlgktnujvga
oiwcdpbsewhxrbfmlgktnuuvza
oiwcdpbsewhxryfmlgkunujvzc
oiwcdpbseqhxryfmlgktiujkga
jiwcdpbseqhxrlfmlgktnurvza
tiwcdpbseqoxryfmliktnujvza
oiwcdpbsenhxryfmlgkskujvza
oiwcdpbseqhxvyfmlhktoujvza
oiwcdpbseqhxeyfmlgmtnunvza
oiwcdpbseqhxdyfmloktnujvzu
oiwcdpbseqgxryfmlgkynejvza
oudcdpbseqhxryfmlgktmujvza
oiwcdpbseqhxryfmvgktnucvzc
oiwcdpbseqhxrysalgwtnujvza
odwodpbseqhgryfmlgktnujvza
oiwcdpbseqheryzmlgktnujgza
oiwcdpbseqhxryfalgwtnujvba
oiwcdpbseqhxryfmlgtdnuhvza
oiocdpbseqhxrefulgktnujvza
kiwcdpbseqhxrywolgktnujvza
niwcdpbseksxryfmlgktnujvza
oiwcdybseqexryfalgktnujvza
oiwcdpbbeqhxryamlgktnujpza
oiecdqbseqhxryfmlgktnujcza
oiwcdpbsqqhxlyfmlpktnujvza
oiwcdpbsaqheryfmlgktnujlza
oiecdpbseqhxryfmlgkknujvzz
oiwcapbsdqhxryfmlgktvujvza
ojwcdxbseqhxryfmlgktrujvza
oiwhdpbseqvxrzfmlgktnujvza
oiwcdppseqhtryfmlgktnujvzs
oikcdpbsfqhxryfmdgktnujvza
owwczpbseqhxryfilgktnujvza
oifwdpbseqhxryfmlgktnujfza
oowcdpbseqhxrprmlgktnujvza
oiwcapbseqhxryfmjgktnujvze
oiwcdpaseqhdrybmlgktnujvza
tiwcdpbseqhxryfmlgkvjujvza
xiwcdpbseqhoryfmlgktnujvqa
eiwrdpbsyqhxryfmlgktnujvza
oiwcdpbseqhxranmlgktnujvzt
oiwcdpbseqhxryfqlgktnudaza
oiwcdpbsvqhxrywmlgktnsjvza
oewcdpbseqhxryfmlgkunujvma
oiwcdpbseqhjrywmlgktnujvzb
omwcdpbseqhxryfmlgktwujsza
oiwcdpbyxqhxryfmlgrtnujvza
oiwidpbseqhxryfhlgktnunvza
oqwcdpbweqhxrybmlgktnujvza
oiwcdqbseqhxryfrlgktnujfza
oiacdpbseqhdryfmlgktaujvza
oiwcdpbstqhxmyfmlgktyujvza
oiwcdpbseqhxeyfclgktjujvza
wiwcdpeseqhxryfmlgktnujvzx
viwcdpbseqhxryfmlgvtvujvza
oircdpbseqhxcyfmlgktnujvma
miwcdpbseqtwryfmlgktnujvza
oiwcppbseqhxcyfmlgxtnujvza
giwcrpbseqhxryfmlgktnudvza
onwcvpbseqhxryfmlgktnujqza
oiwcipbseqhxryfmlgitnuqvza
oiwcdpbseqhxryjmlgkonufvza
oiwnwpbseqhxtyfmlgktnujvza
oiwcypbseqhxryfmlgetnujvzv
oiwcdpbseqhxryqmljktnkjvza
olwcdpbseqhxryfmlgkenujvba
biwcdpbseqwxrywmlgktnujvza
oiwcdpbsevhmryjmlgktnujvza
oiwcdpbseqhxryfmlzktnkjvzv
oiwudpbseqhxrefmlgktnujvia
oiicdpbseqhxryfdloktnujvza
oihcjpbsxqhxryfmlgktnujvza`;

console.log(part1());
console.log(part2());

