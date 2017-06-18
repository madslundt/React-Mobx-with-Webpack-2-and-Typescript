import delay from '../../../infrastructure/api/apiMockDelay';
import {IInfo} from "../PraiceInfoStore";

const info: IInfo = {
    categories: [
        {
            id: "435fb9b8-ca54-4c04-b4a4-e39da11ac4d2",
            name: "Appearance",
            description: "Way of appearing",
            orderIndex: 1,
            traits: [
                {
                    id: "1df28bfa-8c01-4a22-9fa7-6f64ede2d8ca",
                    name: "Outgoing",
                    description: "Someone who finds it easy to talk with other people",
                    orderIndex: 1
                }, {
                    id: "2546398c-5d43-4efa-a847-0dc259d9623d",
                    name: "Optimistic",
                    description: "Someone who expects and focuses on positive outcomes",
                    orderIndex: 2
                }, {
                    id: "910d6465-a208-44ff-b930-6d70037b0d5d",
                    name: "Energetic",
                    description: "Someone who is vital and active",
                    orderIndex: 3
                }, {
                    id: "227957ab-d450-4183-8fda-25451d94ae3e",
                    name: "Humble",
                    description: "Someone who is very modest",
                    orderIndex: 4
                }, {
                    id: "1a5a90f8-9c17-4cd8-9c93-45c9a8b6c80e",
                    name: "Diligent",
                    description: "Someone who makes a steady effort",
                    orderIndex: 5
                }, {
                    id: "35b3f7b2-eac5-4101-a2a9-21f0e4faea6b",
                    name: "Critical",
                    description: "Someone who is good at pointing out problems",
                    orderIndex: 6
                }, {
                    id: "d0b9681e-4b56-4152-80ea-4b3fb8dc0e2b",
                    name: "Relaxed",
                    description: "Someone who does not stress out",
                    orderIndex: 7
                }, {
                    id: "7898aa49-6d84-43d5-8888-6418d93781c4",
                    name: "Powerful",
                    description: "Someone who is capable of influencing and convincing others",
                    orderIndex: 8
                }
            ]
        }, {
            id: "ca5c5aca-d907-4e08-a995-c2dc086f1713",
            name: "Performance",
            description: "Approach to tasks",
            orderIndex: 2,
            traits: [
                {
                    id: "8abc8c84-14e7-4910-9669-ad51c0c13d69",
                    name: "Decisive",
                    description: "Someone who is good at cutting through and making a decision",
                    orderIndex: 1
                }, {
                    id: "d99bc4a2-b086-4195-a25e-f00ddffa0442",
                    name: "Creative",
                    description: "Someone who is original and good at finding alternative ways",
                    orderIndex: 2
                }, {
                    id: "ba8b56c4-0043-4b9e-bd83-752b2d1a333c",
                    name: "Practical",
                    description: "Someone who is good at finding tangible solutions",
                    orderIndex: 3
                }, {
                    id: "dc8ca5cc-6d1f-4cb0-adf6-dacb1a88e2b5",
                    name: "Detail-oriented",
                    description: "Someone who cares about the details",
                    orderIndex: 4
                }, {
                    id: "71077bf9-429a-4112-93d3-ee6a36007417",
                    name: "Open-minded",
                    description: "Someone who is open towards others’ perspectives",
                    orderIndex: 5
                }, {
                    id: "e24297b6-bee9-44c3-8dbc-b84dc5bed308",
                    name: "Systematic",
                    description: "Someone who has a clear and methodical approach to things",
                    orderIndex: 6
                }, {
                    id: "abe4d64f-8048-4a36-84dc-4a262eee287b",
                    name: "Reflective",
                    description: "Someone who considers different angles and perspectives",
                    orderIndex: 7
                }, {
                    id: "17265cbe-a6da-46d8-948d-72860fcee379",
                    name: "Persistent",
                    description: "Someone who keeps going until the goal is accomplished",
                    orderIndex: 8
                }
            ]
        }, {
            id: "1ab99409-851e-4315-8dd6-ec0b01523372",
            name: "Motivation",
            description: "Motivational orientation",
            orderIndex: 3,
            traits: [
                {
                    id: "1026453b-33c1-41bd-96b1-31fff1a2f281",
                    name: "Ambitious",
                    description: "Someone who continuously wants to advance",
                    orderIndex: 1
                }, {
                    id: "4ad0bdc7-a60b-4b71-96e5-c2933e842906",
                    name: "Ambassador",
                    description: "Someone who promotes the ideas of his/her group",
                    orderIndex: 2
                }, {
                    id: "a997881e-1bcc-4890-b27b-29fb5617a120",
                    name: "Pragmatic",
                    description: "Someone who is willing to make compromises to get results",
                    orderIndex: 3
                }, {
                    id: "1c6bf257-8da2-4d1b-b15b-f6f10a9e8d86",
                    name: "Competitive",
                    description: "Someone who is motivated by contests and the possibilty of being the best",
                    orderIndex: 4
                }, {
                    id: "a80e9966-f7f0-4da8-86ec-5b5662700d31",
                    name: "Responsible",
                    description: "Someone who is motivated by being accountable for others",
                    orderIndex: 5
                }, {
                    id: "70afcb79-06ba-44b1-ac02-803d0f540365",
                    name: "Independent",
                    description: "Someone who is self-reliant and does not rely on others for motivation",
                    orderIndex: 6
                }, {
                    id: "67b4ff8c-7874-4cb6-925d-ee85b9556ee3",
                    name: "Idealistic",
                    description: "Someone who does not compromise with his/her values",
                    orderIndex: 7
                }, {
                    id: "c914e1e7-e4bd-4547-b66b-d8cfffd7d40b",
                    name: "Collaborative",
                    description: "Someone who prefers to work with other people",
                    orderIndex: 8
                }
            ]
        }, {
            id: "bf6fb56f-4775-42dc-ba5a-f0475fa33317",
            name: "Relations",
            description: "Interaction style",
            orderIndex: 4,
            traits: [
                {
                    id: "fa8cae76-8886-4f70-9693-0b0a1aae8e1e",
                    name: "Considerate",
                    description: "Someone who is concerned with the interests and feelings of others",
                    orderIndex: 1
                }, {
                    id: "8f4f720c-8ea4-4a3f-8457-5603e8f8fde6",
                    name: "Reliable",
                    description: "Someone who is dependable",
                    orderIndex: 2
                }, {
                    id: "96d9f2e0-4ecc-4aa3-9299-c013acad3eaf",
                    name: "Humorous",
                    description: "Someone who has an eye for the funny aspect of things",
                    orderIndex: 3
                }, {
                    id: "56413a4f-a938-4335-839a-b999dfc5f24f",
                    name: "Acknowledging",
                    description: "Someone who expresses appreciation for others’ way of being",
                    orderIndex: 4
                }, {
                    id: "5790753f-8448-45a0-9644-5b73b4fbb327",
                    name: "Genuine",
                    description: "Someone who is straightforward and honest",
                    orderIndex: 5
                }, {
                    id: "59788a24-f9d9-49b1-b8a4-7f0bc6cce9d5",
                    name: "Charming",
                    description: "Someone who is good at making other people like him/her",
                    orderIndex: 6
                }, {
                    id: "8465049b-c5fe-40b0-b7e1-f911e38b00e3",
                    name: "Helpful",
                    description: "Someone who provides assistance and support to others",
                    orderIndex: 7
                }, {
                    id: "c0e4f384-31ac-4aaa-9edc-70e78ec138af",
                    name: "Enthusiastic",
                    description: "Someone who is expressive and shows excitement",
                    orderIndex: 8
                }
            ]
        }, {
            id: "d4e0a5f4-8685-44f4-8a2e-85eea668665c",
            name: "Challenge",
            description: "Challenging characteristics",
            orderIndex: 5,
            traits: [
                {
                    id: "59eb5186-1263-4186-8c9f-0a83172c17d3",
                    name: "Constrained",
                    description: "Someone who tends to be inhibited in action and expression",
                    orderIndex: 1
                }, {
                    id: "a53aec92-2831-400f-b167-2e0f1d7d21f2",
                    name: "Orthodox",
                    description: "Someone who does not question authorities",
                    orderIndex: 2
                }, {
                    id: "38d26c00-c7bf-4a32-9998-8860935dc38d",
                    name: "Perfectionistic",
                    description: "Someone who always thinks it can get even better",
                    orderIndex: 3
                }, {
                    id: "8797c7ab-d628-42f9-8292-1754ee285a8a",
                    name: "Temperamental",
                    description: "Someone who tend to get carried away by emotions in tense situations",
                    orderIndex: 4
                }, {
                    id: "702527b8-1ce0-4b96-81b3-8282d362e5fc",
                    name: "Bold",
                    description: "Someone who prefers to take a chance",
                    orderIndex: 5
                }, {
                    id: "d271a6c2-0790-4613-9484-d31b0cf50adf",
                    name: "Dominant",
                    description: "Someone who tends to control the behaviour of others",
                    orderIndex: 6
                }, {
                    id: "22cebec1-28b6-41c1-a27c-74fa92c55260",
                    name: "Spontaneous",
                    description: "Someone who is guided by intuitions and emotions",
                    orderIndex: 7
                }, {
                    id: "baf2fa35-380f-4674-8636-6cdca1f0b9ce",
                    name: "Impatient",
                    description: "Someone who wants things done right away",
                    orderIndex: 8
                }
            ]
        }
    ],
    relations: [
        {
            id: 1,
            name: "Friend"
        }, {
            id: 4,
            name: "Family"
        }, {
            id: 5,
            name: "Professional"
        }, {
            id: 6,
            name: "Self"
        }
    ]
};

export const getPraiceInfo = (): Promise<IInfo> => {
    return new Promise<IInfo>((resolve, reject) => {
        setTimeout(() => {
            resolve(info);
        }, delay);
    });
}