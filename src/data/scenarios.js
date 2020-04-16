const SCENARIOS = {
    'TEST_1': {
        name_zh: 'TEST 1',
        constituency_name_zh: "TEST 1",
        seats: 5,
        candidates_list: [
            {
                "number": 1,
                "candidates": 1,
                "fist_candidate_name_en": "WONG KWOK KIN",
                "camp": "pro_e",
                "first_candidate_name_zh": "黃國健",
                "votes": 50
            },
            {
                "number": 2,
                "candidates": 3,
                "fist_candidate_name_en": "WU SUI SHAN",
                "camp": "anti_e",
                "first_candidate_name_zh": "胡穗珊",
                "votes": 30
            },
            {
                "number": 3,
                "candidates": 2,
                "fist_candidate_name_en": "KO TAT PUN PATRICK",
                "camp": "pro_e",
                "first_candidate_name_zh": "高達斌",
                "votes": 20
            }
        ]
    },
    '2016_LC4': {
        name_zh: '16 新界西',
        constituency_name_zh: "新界西",
        seats: 9,
        candidates_list: [
            {
                "number": 1,
                "candidates": 3,
                "first_candidate_name_en": "WONG YUN TAT",
                "camp": "anti_e",
                "first_candidate_name_zh": "黃潤達",
                "votes": 20974
            },
            {
                "number": 2,
                "candidates": 5,
                "first_candidate_name_en": "WAN SIU KIN ANDREW",
                "camp": "anti_e",
                "first_candidate_name_zh": "尹兆堅",
                "votes": 41704
            },
            {
                "number": 3,
                "candidates": 2,
                "first_candidate_name_en": "KO CHI FAI",
                "camp": "other",
                "first_candidate_name_zh": "高志輝",
                "votes": 604
            },
            {
                "number": 4,
                "candidates": 1,
                "first_candidate_name_en": "CHOW WING KAN",
                "camp": "pro_e",
                "first_candidate_name_zh": "周永勤",
                "votes": 1469
            },
            {
                "number": 5,
                "candidates": 2,
                "first_candidate_name_en": "CHENG CHUNG TAI",
                "camp": "anti_e",
                "first_candidate_name_zh": "鄭松泰",
                "votes": 54496
            },
            {
                "number": 6,
                "candidates": 1,
                "first_candidate_name_en": "KWONG KOON WAN",
                "camp": "pro_e",
                "first_candidate_name_zh": "鄺官穩",
                "votes": 810
            },
            {
                "number": 7,
                "candidates": 7,
                "first_candidate_name_en": "TIEN MICHAEL PUK SUN",
                "camp": "pro_e",
                "first_candidate_name_zh": "田北辰",
                "votes": 70646
            },
            {
                "number": 8,
                "candidates": 1,
                "first_candidate_name_en": "HO KWAN YIU",
                "camp": "pro_e",
                "first_candidate_name_zh": "何君堯",
                "votes": 35657
            },
            {
                "number": 9,
                "candidates": 6,
                "first_candidate_name_en": "LEUNG CHE CHEUNG",
                "camp": "pro_e",
                "first_candidate_name_zh": "梁志祥",
                "votes": 50190
            },
            {
                "number": 10,
                "candidates": 2,
                "first_candidate_name_en": "KWOK KA KI",
                "camp": "anti_e",
                "first_candidate_name_zh": "郭家麒",
                "votes": 42334
            },
            {
                "number": 11,
                "candidates": 2,
                "first_candidate_name_en": "WONG HO MING",
                "camp": "anti_e",
                "first_candidate_name_zh": "黃浩銘",
                "votes": 28529
            },
            {
                "number": 12,
                "candidates": 2,
                "first_candidate_name_en": "LEE CHEUK YAN",
                "camp": "anti_e",
                "first_candidate_name_zh": "李卓人",
                "votes": 30149
            },
            {
                "number": 13,
                "candidates": 2,
                "first_candidate_name_en": "WONG CHUN KIT",
                "camp": "anti_e",
                "first_candidate_name_zh": "黃俊傑",
                "votes": 9928
            },
            {
                "number": 14,
                "candidates": 5,
                "first_candidate_name_en": "MAK MEI KUEN ALICE",
                "camp": "pro_e",
                "first_candidate_name_zh": "麥美娟",
                "votes": 49680
            },
            {
                "number": 15,
                "candidates": 1,
                "first_candidate_name_en": "FUNG KIN KEE FREDERICK",
                "camp": "anti_e",
                "first_candidate_name_zh": "馮檢基",
                "votes": 17872
            },
            {
                "number": 16,
                "candidates": 7,
                "first_candidate_name_en": "CHAN HAN PAN",
                "camp": "pro_e",
                "first_candidate_name_zh": "陳恒鑌",
                "votes": 58673
            },
            {
                "number": 17,
                "candidates": 1,
                "first_candidate_name_en": "CHEUNG WAI CHING CLARICE",
                "camp": "pro_e",
                "first_candidate_name_zh": "張慧晶",
                "votes": 2390
            },
            {
                "number": 18,
                "candidates": 1,
                "first_candidate_name_en": "LUI CHI HANG HENDRICK",
                "camp": "anti_e",
                "first_candidate_name_zh": "呂智恆",
                "votes": 812
            },
            {
                "number": 19,
                "candidates": 1,
                "first_candidate_name_en": "TONG WING CHI",
                "camp": "anti_e",
                "first_candidate_name_zh": "湯詠芝",
                "votes": 2408
            },
            {
                "number": 20,
                "candidates": 1,
                "first_candidate_name_en": "CHU HOI DICK EDDIE",
                "camp": "anti_e",
                "first_candidate_name_zh": "朱凱廸",
                "votes": 84121
            }
        ]
    },
    '2016_LC3': {
        name_zh: '16 九龍東',
        constituency_name_zh: "九龍東",
        seats: 5,
        candidates_list: [
            {
                "number": 1,
                "candidates": 4,
                "first_candidate_name_en": "WONG KWOK KIN",
                "camp": "pro_e",
                "first_candidate_name_zh": "黃國健",
                "votes": 47318
            },
            {
                "number": 2,
                "candidates": 2,
                "first_candidate_name_en": "WU SUI SHAN",
                "camp": "anti_e",
                "first_candidate_name_zh": "胡穗珊",
                "votes": 2535
            },
            {
                "number": 3,
                "candidates": 1,
                "first_candidate_name_en": "KO TAT PUN PATRICK",
                "camp": "pro_e",
                "first_candidate_name_zh": "高達斌",
                "votes": 2444
            },
            {
                "number": 4,
                "candidates": 1,
                "first_candidate_name_en": "TAM HEUNG MAN",
                "camp": "anti_e",
                "first_candidate_name_zh": "譚香文",
                "votes": 2603
            },
            {
                "number": 5,
                "candidates": 1,
                "first_candidate_name_en": "TSE WAI CHUN PAUL",
                "camp": "pro_e",
                "first_candidate_name_zh": "謝偉俊",
                "votes": 47527
            },
            {
                "number": 6,
                "candidates": 3,
                "first_candidate_name_en": "OR CHONG SHING WILSON",
                "camp": "pro_e",
                "first_candidate_name_zh": "柯創盛",
                "votes": 51516
            },
            {
                "number": 7,
                "candidates": 1,
                "first_candidate_name_en": "LUI WING KEI",
                "camp": "other",
                "first_candidate_name_zh": "呂永基",
                "votes": 1393
            },
            {
                "number": 8,
                "candidates": 4,
                "first_candidate_name_en": "WU CHI WAI",
                "camp": "anti_e",
                "first_candidate_name_zh": "胡志偉",
                "votes": 50309
            },
            {
                "number": 9,
                "candidates": 2,
                "first_candidate_name_en": "TAM MAN HO JEREMY JANSEN",
                "camp": "anti_e",
                "first_candidate_name_zh": "譚文豪",
                "votes": 45408
            },
            {
                "number": 10,
                "candidates": 1,
                "first_candidate_name_en": "WONG YEUNG TAT",
                "camp": "anti_e",
                "first_candidate_name_zh": "黃洋達",
                "votes": 33271
            },
            {
                "number": 11,
                "candidates": 1,
                "first_candidate_name_en": "CHAN CHAK TO",
                "camp": "anti_e",
                "first_candidate_name_zh": "陳澤滔",
                "votes": 12854
            },
            {
                "number": 12,
                "candidates": 1,
                "first_candidate_name_en": "TAM TAK CHI",
                "camp": "anti_e",
                "first_candidate_name_zh": "譚得志",
                "votes": 31815
            }
        ]
    }
}


export default SCENARIOS