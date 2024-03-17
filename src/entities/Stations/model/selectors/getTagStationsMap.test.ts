import { getTagStationsMap } from 'entities/Stations/model/selectors/getTagStationsMap';
import { StateSchema } from 'app/providers/StoreProvider';

const data = {
    data: [
        {
            id: 's306935',
            description: 'Tmaorrow before you hear them anywhere else.',
            name: 'The Element West',
            imgUrl: 'https://cdn-profiles.tunein.com/s306935/images/logoq.jpg',
            streamUrl: 'http://tunein4.streamguys1.com/elmntfree1',
            reliability: 64,
            popularity: 3.0,
            tags: [
                'hip hop',
                'music',
            ],
        },
        {
            id: 's249995',
            description: "Latm artd discover the freshest sounds of Latin's bright future right here.",
            name: 'Latin Hits',
            imgUrl: 'http://cdn-profiles.tunein.com/s249995/images/logoq.png',
            streamUrl: 'htmale&aw_0_1st.playerid=RadioTime&aw_0_1st.skey=1548844301',
            reliability: 34,
            popularity: 2.7,
            tags: [
                'latin',
                'pop latino',
                'music',
            ],
        },
        {
            id: 's34804',
            name: 'KQED',
            description: 'KQED',
            imgUrl: 'https://cdn-radiotime-logos.tunein.com/s34804q.png',
            streamUrl: 'http://50.31.186.115:80/kqedradio.mp3',
            reliability: 72,
            popularity: 4.4,
            tags: [
                'news',
                'public radio',
                'current affairs',
            ],
        },
        {
            id: 's249973',
            name: 'Smooth Jazz',
            description: 'Sit down and relax to the smooth, downtempo jazz of Kenny G, Sade, Anita Baker and George Benson.',
            imgUrl: 'http://cdn-radiotime-logos.tunein.com/s249973q.png',
            streamUrl: 'http://rfcmedia.streamguys1.co',
            reliability: 93,
            popularity: 3.5,
            tags: [
                'jazz',
                'chicago',
                'music',
                'top',
            ],
        },
        {
            id: 's249994',
            name: 'Classic Rock',
            description: "d Guns N' Roses, classic rock lives here.",
            imgUrl: 'https://cdn-profiles.tunein.com/s249994/images/logoq.png',
            streamUrl: 'hder=female&aw_0_1st.playerid=RadioTime&aw_0_1st.skey=1548845334',
            reliability: 83,
            popularity: 3.8,
            tags: [
                'classic rock',
                'music',
            ],
        },
        {
            id: 's242677',
            name: "Today's Hits",
            description: 'an and more.',
            imgUrl: 'https://cdn-profiles.tunein.com/s242677/images/logoq.png',
            streamUrl: 'emale&aw_0_1st.playerid=RadioTime&aw_0_1st.skey=1548845498',
            reliability: 98,
            popularity: 4.6,
            tags: [
                'top hits',
                'pop',
                'music',
            ],
        },
    ],
};

describe('getTagStationsMap.test', () => {
    let state;
    let tagMap: unknown;
    beforeAll(() => {
        state = {
            stations: {
                data: data.data,
            },
        };
        tagMap = getTagStationsMap(state as StateSchema);
    });
    test('should return one station for hip hop type', () => {
        const state = {
            stations: {
                data: data.data,
            },
        };
        const tagMap = getTagStationsMap(state as StateSchema);
        const expectedResult = [data.data[0]];
        expect(tagMap.get('hip hop')).toEqual(expectedResult);
    });
    test('should return correct length for music type', () => {
        const expectedResult = 5;

        // @ts-ignore
        expect(tagMap.get('music').length).toEqual(expectedResult);
    });
});
