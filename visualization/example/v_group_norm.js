var nodes_new = [{'id': 0, 'name': '贝拉kira', 'value': 1.67, 'category': 3},
{'id': 1, 'name': '嘉然今天吃什么', 'value': 1.78, 'category': 3},
{'id': 4, 'name': '七海Nana7mi', 'value': 1.74, 'category': 3},
{'id': 5, 'name': '阿梓从小就很可爱', 'value': 1.99, 'category': 3},
{'id': 11, 'name': '泠鸢yousa', 'value': 1.82, 'category': 1},
{'id': 66, 'name': 'hanser', 'value': 2.0, 'category': 6},
{'id': 18, 'name': '咩栗', 'value': 1.66, 'category': 1},
{'id': 27, 'name': '呜米', 'value': 1.5, 'category': 1},
{'id': 8, 'name': '露早GOGO', 'value': 1.45, 'category': 3},
{'id': 13, 'name': '小可学妹', 'value': 1.44, 'category': 1},
{'id': 2, 'name': '向晚大魔王', 'value': 1.27, 'category': 3},
{'id': 3, 'name': '乃琳Queen', 'value': 1.29, 'category': 3},
{'id': 68, 'name': '美月もも', 'value': 1.69, 'category': 2},
{'id': 70, 'name': '古守血遊official', 'value': 1.41, 'category': 2},
{'id': 72, 'name': '椎名菜羽Official', 'value': 1.39, 'category': 2},
{'id': 12, 'name': '雫るる_Official', 'value': 1.69, 'category': 2},
{'id': 15, 'name': '早稻叽', 'value': 1.71, 'category': 1},
{'id': 20, 'name': '白神遥Haruka', 'value': 1.57, 'category': 1},
{'id': 58, 'name': '鈴宮鈴', 'value': 1.21, 'category': 2},
{'id': 39, 'name': '乙女音Official', 'value': 1.22, 'category': 2},
{'id': 25, 'name': '内德维德', 'value': 1.61, 'category': 4},
{'id': 36, 'name': '东爱璃Lovely', 'value': 1.42, 'category': 1},
{'id': 35, 'name': '星汐Seki', 'value': 1.35, 'category': 1},
{'id': 10, 'name': '明前奶绿', 'value': 1.58, 'category': 3},
{'id': 33, 'name': '卡缇娅也不知道鸭', 'value': 1.31, 'category': 1},
{'id': 83, 'name': '河黎有片小叶子', 'value': 1.23, 'category': 8},
{'id': 31, 'name': '帅比笙歌超可爱OvO', 'value': 1.35, 'category': 1},
{'id': 53, 'name': '夢乃栞Yumeno_Shiori', 'value': 1.25, 'category': 2},
{'id': 63, 'name': '宣小纸不怕火', 'value': 1.03, 'category': 8},
{'id': 81, 'name': '魔狼咪莉娅', 'value': 1.2, 'category': 2},
{'id': 14, 'name': '東雪蓮Official', 'value': 1.36, 'category': 3},
{'id': 32, 'name': '小缘', 'value': 1.26, 'category': 6},
{'id': 69, 'name': '秋凛子Rinco', 'value': 1.29, 'category': 1},
{'id': 24, 'name': '星宮汐Official', 'value': 1.28, 'category': 2},
{'id': 75, 'name': '希月萌奈', 'value': 1.24, 'category': 1},
{'id': 71, 'name': '雪狐桑', 'value': 1.49, 'category': 1},
{'id': 45, 'name': '蕾尔娜Leona', 'value': 1.31, 'category': 1},
{'id': 79, 'name': '路希维德Wiede', 'value': 1.21, 'category': 1},
{'id': 76, 'name': '九重紫Official', 'value': 1.16, 'category': 2},
{'id': 46, 'name': '夏诺雅_shanoa', 'value': 1.16, 'category': 2},
{'id': 23, 'name': '物述有栖Official', 'value': 1.27, 'category': 2},
{'id': 60, 'name': '奈奈莉娅Channel', 'value': 1.09, 'category': 1},
{'id': 30, 'name': '花园Serena', 'value': 1.15, 'category': 2},
{'id': 57, 'name': '红晓音Akane', 'value': 1.13, 'category': 1},
{'id': 22, 'name': '小柔Channel', 'value': 1.44, 'category': 1},
{'id': 7, 'name': '星瞳_Official', 'value': 1.36, 'category': 3},
{'id': 82, 'name': '黎歌Neeko', 'value': 1.17, 'category': 1},
{'id': 26, 'name': '扇宝', 'value': 1.4, 'category': 1},
{'id': 19, 'name': '神楽Mea_NHOTBOT', 'value': 1.3, 'category': 2},
{'id': 50, 'name': '桃几OvO', 'value': 1.1, 'category': 4},
{'id': 43, 'name': '梦音茶糯', 'value': 1.36, 'category': 1},
{'id': 38, 'name': '艾露露Ailurus', 'value': 1.1, 'category': 1},
{'id': 44, 'name': '星弥Hoshimi', 'value': 1.05, 'category': 4},
{'id': 87, 'name': '小鸟游杏子Official', 'value': 1.06, 'category': 2},
{'id': 54, 'name': '穆小泠Official', 'value': 1.18, 'category': 1},
{'id': 21, 'name': '兰音Reine', 'value': 1.3, 'category': 1},
{'id': 17, 'name': '冰糖IO', 'value': 1.05, 'category': 1},
{'id': 40, 'name': '雪绘Yukie', 'value': 1.25, 'category': 1},
{'id': 84, 'name': '艾尔莎_Channel', 'value': 1.21, 'category': 5},
{'id': 56, 'name': '巴老师的小号', 'value': 1.14, 'category': 1},
{'id': 34, 'name': '恋乃夜舞_propro', 'value': 1.16, 'category': 2},
{'id': 55, 'name': '钉宫妮妮Ninico', 'value': 1.04, 'category': 1},
{'id': 49, 'name': '祖娅纳惜', 'value': 1.12, 'category': 9},
{'id': 28, 'name': '鹿乃ちゃん', 'value': 1.0, 'category': 2},
{'id': 80, 'name': '木糖纯Official', 'value': 1.15, 'category': 5},
{'id': 78, 'name': '猫芒ベル_Official', 'value': 1.23, 'category': 2},
{'id': 62, 'name': '小小约yoo', 'value': 1.04, 'category': 1},
{'id': 37, 'name': '杜松子_Gin', 'value': 1.02, 'category': 1},
{'id': 48, 'name': '花丸晴琉Official', 'value': 1.06, 'category': 2},
{'id': 42, 'name': '黑泽诺亚NOIR', 'value': 1.12, 'category': 4},
{'id': 41, 'name': '奈姬niki', 'value': 1.15, 'category': 1},
{'id': 85, 'name': '牛野露哞_usrm', 'value': 1.1, 'category': 2},
{'id': 61, 'name': '夏川玥玥Official', 'value': 1.02, 'category': 1},
{'id': 86, 'name': '小铃久绘Official', 'value': 1.02, 'category': 1}]

var links_new = [{'source': 0, 'target': 1, 'weight': 1.53},
{'source': 1, 'target': 0, 'weight': 1.07},
{'source': 4, 'target': 5, 'weight': 0.71},
{'source': 5, 'target': 4, 'weight': 0.15},
{'source': 11, 'target': 66, 'weight': 0.47},
{'source': 66, 'target': 11, 'weight': 0.11},
{'source': 18, 'target': 27, 'weight': 0.84},
{'source': 27, 'target': 18, 'weight': 1.5},
{'source': 13, 'target': 5, 'weight': 1.21},
{'source': 2, 'target': 1, 'weight': 1.99},
{'source': 1, 'target': 2, 'weight': 0.23},
{'source': 3, 'target': 0, 'weight': 1.85},
{'source': 0, 'target': 3, 'weight': 0.44},
{'source': 1, 'target': 3, 'weight': 0.19},
{'source': 3, 'target': 1, 'weight': 1.78},
{'source': 0, 'target': 2, 'weight': 0.38},
{'source': 2, 'target': 0, 'weight': 1.81},
{'source': 68, 'target': 67, 'weight': 0.29},
{'source': 2, 'target': 3, 'weight': 1.62},
{'source': 3, 'target': 2, 'weight': 1.53},
{'source': 70, 'target': 72, 'weight': 1.01},
{'source': 72, 'target': 70, 'weight': 1.07},
{'source': 70, 'target': 67, 'weight': 0.96},
{'source': 12, 'target': 9, 'weight': 0.21},
{'source': 12, 'target': 67, 'weight': 0.2},
{'source': 4, 'target': 6, 'weight': 0.08},
{'source': 15, 'target': 9, 'weight': 0.08},
{'source': 72, 'target': 67, 'weight': 0.8},
{'source': 18, 'target': 20, 'weight': 0.15},
{'source': 20, 'target': 18, 'weight': 0.31},
{'source': 15, 'target': 67, 'weight': 0.07},
{'source': 13, 'target': 4, 'weight': 0.63},
{'source': 70, 'target': 58, 'weight': 0.69},
{'source': 58, 'target': 70, 'weight': 1.39},
{'source': 70, 'target': 39, 'weight': 0.68},
{'source': 39, 'target': 70, 'weight': 1.34},
{'source': 25, 'target': 5, 'weight': 0.18},
{'source': 20, 'target': 15, 'weight': 0.24},
{'source': 36, 'target': 35, 'weight': 0.58},
{'source': 35, 'target': 36, 'weight': 0.77},
{'source': 10, 'target': 6, 'weight': 0.22},
{'source': 58, 'target': 72, 'weight': 1.24},
{'source': 72, 'target': 58, 'weight': 0.63},
{'source': 33, 'target': 83, 'weight': 0.86},
{'source': 83, 'target': 33, 'weight': 1.15},
{'source': 31, 'target': 5, 'weight': 0.7},
{'source': 70, 'target': 53, 'weight': 0.52},
{'source': 53, 'target': 70, 'weight': 1.01},
{'source': 36, 'target': 20, 'weight': 0.49},
{'source': 20, 'target': 36, 'weight': 0.17},
{'source': 83, 'target': 63, 'weight': 1.07},
{'source': 63, 'target': 83, 'weight': 2.0},
{'source': 39, 'target': 67, 'weight': 1.05},
{'source': 81, 'target': 70, 'weight': 1.12},
{'source': 70, 'target': 81, 'weight': 0.49},
{'source': 53, 'target': 72, 'weight': 0.95},
{'source': 72, 'target': 53, 'weight': 0.52},
{'source': 58, 'target': 67, 'weight': 1.06},
{'source': 39, 'target': 72, 'weight': 1.0},
{'source': 72, 'target': 39, 'weight': 0.49},
{'source': 72, 'target': 81, 'weight': 0.46},
{'source': 81, 'target': 72, 'weight': 1.01},
{'source': 20, 'target': 9, 'weight': 0.09},
{'source': 35, 'target': 31, 'weight': 0.55},
{'source': 31, 'target': 35, 'weight': 0.54},
{'source': 10, 'target': 5, 'weight': 0.08},
{'source': 81, 'target': 58, 'weight': 0.95},
{'source': 58, 'target': 81, 'weight': 0.91},
{'source': 70, 'target': 68, 'weight': 0.36},
{'source': 81, 'target': 67, 'weight': 0.9},
{'source': 14, 'target': 6, 'weight': 0.43},
{'source': 53, 'target': 67, 'weight': 0.74},
{'source': 32, 'target': 66, 'weight': 0.68},
{'source': 39, 'target': 58, 'weight': 0.77},
{'source': 58, 'target': 39, 'weight': 0.8},
{'source': 35, 'target': 69, 'weight': 0.42},
{'source': 69, 'target': 35, 'weight': 0.57},
{'source': 33, 'target': 63, 'weight': 0.53},
{'source': 63, 'target': 33, 'weight': 1.51},
{'source': 31, 'target': 25, 'weight': 0.41},
{'source': 13, 'target': 9, 'weight': 0.24},
{'source': 70, 'target': 12, 'weight': 0.29},
{'source': 36, 'target': 69, 'weight': 0.27},
{'source': 69, 'target': 36, 'weight': 0.56},
{'source': 24, 'target': 9, 'weight': 0.57},
{'source': 39, 'target': 53, 'weight': 0.73},
{'source': 53, 'target': 39, 'weight': 0.66},
{'source': 53, 'target': 58, 'weight': 0.64},
{'source': 58, 'target': 53, 'weight': 0.74},
{'source': 13, 'target': 15, 'weight': 0.21},
{'source': 27, 'target': 20, 'weight': 0.11},
{'source': 72, 'target': 68, 'weight': 0.29},
{'source': 75, 'target': 71, 'weight': 0.65},
{'source': 71, 'target': 75, 'weight': 0.11},
{'source': 31, 'target': 13, 'weight': 0.36},
{'source': 13, 'target': 31, 'weight': 0.2},
{'source': 70, 'target': 9, 'weight': 0.24},
{'source': 71, 'target': 20, 'weight': 0.09},
{'source': 36, 'target': 18, 'weight': 0.22},
{'source': 45, 'target': 79, 'weight': 0.44},
{'source': 79, 'target': 45, 'weight': 0.68},
{'source': 76, 'target': 67, 'weight': 0.82},
{'source': 35, 'target': 20, 'weight': 0.33},
{'source': 71, 'target': 18, 'weight': 0.08},
{'source': 46, 'target': 67, 'weight': 0.82},
{'source': 36, 'target': 31, 'weight': 0.18},
{'source': 31, 'target': 36, 'weight': 0.3},
{'source': 35, 'target': 5, 'weight': 0.3},
{'source': 13, 'target': 6, 'weight': 0.14},
{'source': 76, 'target': 68, 'weight': 0.75},
{'source': 39, 'target': 9, 'weight': 0.57},
{'source': 36, 'target': 15, 'weight': 0.15},
{'source': 13, 'target': 64, 'weight': 0.12},
{'source': 23, 'target': 9, 'weight': 0.44},
{'source': 60, 'target': 71, 'weight': 0.94},
{'source': 30, 'target': 9, 'weight': 0.75},
{'source': 57, 'target': 36, 'weight': 0.82},
{'source': 36, 'target': 57, 'weight': 0.14},
{'source': 46, 'target': 70, 'weight': 0.69},
{'source': 70, 'target': 46, 'weight': 0.14},
{'source': 39, 'target': 12, 'weight': 0.52},
{'source': 22, 'target': 5, 'weight': 0.08},
{'source': 45, 'target': 15, 'weight': 0.32},
{'source': 7, 'target': 1, 'weight': 0.21},
{'source': 22, 'target': 9, 'weight': 0.08},
{'source': 8, 'target': 1, 'weight': 0.06},
{'source': 53, 'target': 81, 'weight': 0.44},
{'source': 81, 'target': 53, 'weight': 0.55},
{'source': 72, 'target': 12, 'weight': 0.15},
{'source': 32, 'target': 11, 'weight': 0.42},
{'source': 39, 'target': 81, 'weight': 0.49},
{'source': 81, 'target': 39, 'weight': 0.55},
{'source': 22, 'target': 15, 'weight': 0.07},
{'source': 72, 'target': 9, 'weight': 0.13},
{'source': 39, 'target': 68, 'weight': 0.46},
{'source': 58, 'target': 68, 'weight': 0.47},
{'source': 24, 'target': 12, 'weight': 0.31},
{'source': 72, 'target': 46, 'weight': 0.11},
{'source': 46, 'target': 72, 'weight': 0.6},
{'source': 7, 'target': 4, 'weight': 0.16},
{'source': 2, 'target': 4, 'weight': 0.33},
{'source': 3, 'target': 4, 'weight': 0.29},
{'source': 24, 'target': 5, 'weight': 0.3},
{'source': 46, 'target': 68, 'weight': 0.58},
{'source': 81, 'target': 68, 'weight': 0.47},
{'source': 46, 'target': 9, 'weight': 0.58},
{'source': 70, 'target': 15, 'weight': 0.07},
{'source': 82, 'target': 71, 'weight': 0.54},
{'source': 33, 'target': 26, 'weight': 0.24},
{'source': 26, 'target': 33, 'weight': 0.07},
{'source': 19, 'target': 9, 'weight': 0.25},
{'source': 14, 'target': 5, 'weight': 0.13},
{'source': 31, 'target': 4, 'weight': 0.14},
{'source': 58, 'target': 12, 'weight': 0.41},
{'source': 14, 'target': 4, 'weight': 0.12},
{'source': 7, 'target': 5, 'weight': 0.12},
{'source': 30, 'target': 67, 'weight': 0.55},
{'source': 24, 'target': 67, 'weight': 0.24},
{'source': 31, 'target': 69, 'weight': 0.12},
{'source': 69, 'target': 31, 'weight': 0.23},
{'source': 3, 'target': 5, 'weight': 0.23},
{'source': 2, 'target': 5, 'weight': 0.26},
{'source': 23, 'target': 12, 'weight': 0.25},
{'source': 76, 'target': 70, 'weight': 0.48},
{'source': 53, 'target': 9, 'weight': 0.29},
{'source': 69, 'target': 20, 'weight': 0.21},
{'source': 46, 'target': 58, 'weight': 0.47},
{'source': 58, 'target': 46, 'weight': 0.35},
{'source': 58, 'target': 9, 'weight': 0.35},
{'source': 53, 'target': 46, 'weight': 0.28},
{'source': 46, 'target': 53, 'weight': 0.46},
{'source': 7, 'target': 0, 'weight': 0.08},
{'source': 46, 'target': 12, 'weight': 0.46},
{'source': 35, 'target': 15, 'weight': 0.1},
{'source': 45, 'target': 18, 'weight': 0.16},
{'source': 24, 'target': 15, 'weight': 0.21},
{'source': 50, 'target': 25, 'weight': 0.62},
{'source': 53, 'target': 68, 'weight': 0.27},
{'source': 53, 'target': 12, 'weight': 0.27},
{'source': 35, 'target': 13, 'weight': 0.08},
{'source': 76, 'target': 12, 'weight': 0.44},
{'source': 2, 'target': 7, 'weight': 0.21},
{'source': 7, 'target': 2, 'weight': 0.06},
{'source': 57, 'target': 20, 'weight': 0.53},
{'source': 57, 'target': 35, 'weight': 0.53},
{'source': 35, 'target': 57, 'weight': 0.08},
{'source': 76, 'target': 9, 'weight': 0.43},
{'source': 43, 'target': 71, 'weight': 0.07},
{'source': 7, 'target': 3, 'weight': 0.06},
{'source': 3, 'target': 7, 'weight': 0.17},
{'source': 75, 'target': 20, 'weight': 0.26},
{'source': 38, 'target': 22, 'weight': 0.59},
{'source': 23, 'target': 67, 'weight': 0.2},
{'source': 44, 'target': 4, 'weight': 0.72},
{'source': 57, 'target': 69, 'weight': 0.51},
{'source': 69, 'target': 57, 'weight': 0.16},
{'source': 87, 'target': 67, 'weight': 0.69},
{'source': 45, 'target': 20, 'weight': 0.13},
{'source': 46, 'target': 39, 'weight': 0.41},
{'source': 39, 'target': 46, 'weight': 0.28},
{'source': 19, 'target': 12, 'weight': 0.13},
{'source': 19, 'target': 23, 'weight': 0.13},
{'source': 23, 'target': 19, 'weight': 0.18},
{'source': 30, 'target': 15, 'weight': 0.41},
{'source': 30, 'target': 70, 'weight': 0.4},
{'source': 54, 'target': 15, 'weight': 0.34},
{'source': 2, 'target': 6, 'weight': 0.16},
{'source': 30, 'target': 12, 'weight': 0.38},
{'source': 39, 'target': 15, 'weight': 0.23},
{'source': 30, 'target': 39, 'weight': 0.37},
{'source': 39, 'target': 30, 'weight': 0.22},
{'source': 38, 'target': 25, 'weight': 0.5},
{'source': 24, 'target': 68, 'weight': 0.12},
{'source': 3, 'target': 6, 'weight': 0.1},
{'source': 75, 'target': 18, 'weight': 0.18},
{'source': 46, 'target': 15, 'weight': 0.33},
{'source': 76, 'target': 39, 'weight': 0.32},
{'source': 76, 'target': 72, 'weight': 0.32},
{'source': 39, 'target': 76, 'weight': 0.21},
{'source': 81, 'target': 9, 'weight': 0.24},
{'source': 21, 'target': 15, 'weight': 0.08},
{'source': 87, 'target': 68, 'weight': 0.57},
{'source': 17, 'target': 11, 'weight': 0.59},
{'source': 81, 'target': 12, 'weight': 0.24},
{'source': 30, 'target': 72, 'weight': 0.34},
{'source': 30, 'target': 46, 'weight': 0.34},
{'source': 46, 'target': 30, 'weight': 0.31},
{'source': 40, 'target': 5, 'weight': 0.14},
{'source': 21, 'target': 22, 'weight': 0.07},
{'source': 30, 'target': 53, 'weight': 0.34},
{'source': 53, 'target': 30, 'weight': 0.15},
{'source': 17, 'target': 9, 'weight': 0.58},
{'source': 24, 'target': 4, 'weight': 0.09},
{'source': 56, 'target': 40, 'weight': 0.35},
{'source': 40, 'target': 56, 'weight': 0.14},
{'source': 21, 'target': 11, 'weight': 0.07},
{'source': 19, 'target': 5, 'weight': 0.07},
{'source': 30, 'target': 23, 'weight': 0.33},
{'source': 23, 'target': 30, 'weight': 0.11},
{'source': 24, 'target': 70, 'weight': 0.09},
{'source': 84, 'target': 29, 'weight': 0.2},
{'source': 23, 'target': 70, 'weight': 0.1},
{'source': 19, 'target': 4, 'weight': 0.06},
{'source': 34, 'target': 9, 'weight': 0.29},
{'source': 19, 'target': 67, 'weight': 0.05},
{'source': 40, 'target': 4, 'weight': 0.12},
{'source': 39, 'target': 23, 'weight': 0.17},
{'source': 23, 'target': 39, 'weight': 0.09},
{'source': 44, 'target': 5, 'weight': 0.53},
{'source': 75, 'target': 36, 'weight': 0.13},
{'source': 23, 'target': 15, 'weight': 0.09},
{'source': 53, 'target': 23, 'weight': 0.12},
{'source': 23, 'target': 53, 'weight': 0.08},
{'source': 55, 'target': 15, 'weight': 0.53},
{'source': 81, 'target': 46, 'weight': 0.18},
{'source': 76, 'target': 58, 'weight': 0.25},
{'source': 46, 'target': 81, 'weight': 0.25},
{'source': 58, 'target': 15, 'weight': 0.16},
{'source': 58, 'target': 76, 'weight': 0.16},
{'source': 23, 'target': 72, 'weight': 0.07},
{'source': 30, 'target': 11, 'weight': 0.27},
{'source': 38, 'target': 31, 'weight': 0.39},
{'source': 53, 'target': 15, 'weight': 0.1},
{'source': 23, 'target': 64, 'weight': 0.06},
{'source': 30, 'target': 19, 'weight': 0.26},
{'source': 30, 'target': 66, 'weight': 0.25},
{'source': 17, 'target': 15, 'weight': 0.47},
{'source': 50, 'target': 5, 'weight': 0.36},
{'source': 49, 'target': 11, 'weight': 0.31},
{'source': 17, 'target': 5, 'weight': 0.46},
{'source': 30, 'target': 58, 'weight': 0.24},
{'source': 54, 'target': 18, 'weight': 0.19},
{'source': 58, 'target': 30, 'weight': 0.13},
{'source': 57, 'target': 31, 'weight': 0.28},
{'source': 79, 'target': 18, 'weight': 0.12},
{'source': 79, 'target': 15, 'weight': 0.11},
{'source': 28, 'target': 11, 'weight': 0.56},
{'source': 17, 'target': 4, 'weight': 0.43},
{'source': 80, 'target': 29, 'weight': 0.23},
{'source': 87, 'target': 12, 'weight': 0.41},
{'source': 46, 'target': 24, 'weight': 0.19},
{'source': 60, 'target': 15, 'weight': 0.32},
{'source': 17, 'target': 6, 'weight': 0.41},
{'source': 30, 'target': 24, 'weight': 0.2},
{'source': 76, 'target': 53, 'weight': 0.17},
{'source': 39, 'target': 24, 'weight': 0.08},
{'source': 60, 'target': 75, 'weight': 0.3},
{'source': 17, 'target': 66, 'weight': 0.38},
{'source': 78, 'target': 9, 'weight': 0.06},
{'source': 57, 'target': 15, 'weight': 0.22},
{'source': 49, 'target': 66, 'weight': 0.24},
{'source': 62, 'target': 26, 'weight': 0.4},
{'source': 30, 'target': 68, 'weight': 0.17},
{'source': 76, 'target': 46, 'weight': 0.14},
{'source': 46, 'target': 76, 'weight': 0.14},
{'source': 46, 'target': 23, 'weight': 0.14},
{'source': 30, 'target': 64, 'weight': 0.16},
{'source': 37, 'target': 26, 'weight': 0.42},
{'source': 54, 'target': 71, 'weight': 0.12},
{'source': 38, 'target': 5, 'weight': 0.26},
{'source': 48, 'target': 9, 'weight': 0.32},
{'source': 28, 'target': 66, 'weight': 0.46},
{'source': 76, 'target': 15, 'weight': 0.12},
{'source': 30, 'target': 5, 'weight': 0.14},
{'source': 76, 'target': 81, 'weight': 0.11},
{'source': 81, 'target': 76, 'weight': 0.05},
{'source': 54, 'target': 20, 'weight': 0.09},
{'source': 57, 'target': 18, 'weight': 0.17},
{'source': 50, 'target': 31, 'weight': 0.22},
{'source': 48, 'target': 67, 'weight': 0.29},
{'source': 38, 'target': 33, 'weight': 0.22},
{'source': 42, 'target': 5, 'weight': 0.17},
{'source': 17, 'target': 64, 'weight': 0.3},
{'source': 48, 'target': 23, 'weight': 0.27},
{'source': 62, 'target': 33, 'weight': 0.32},
{'source': 41, 'target': 5, 'weight': 0.11},
{'source': 60, 'target': 82, 'weight': 0.21},
{'source': 37, 'target': 33, 'weight': 0.35},
{'source': 82, 'target': 60, 'weight': 0.08},
{'source': 34, 'target': 67, 'weight': 0.1},
{'source': 34, 'target': 12, 'weight': 0.1},
{'source': 85, 'target': 68, 'weight': 0.19},
{'source': 17, 'target': 1, 'weight': 0.28},
{'source': 55, 'target': 67, 'weight': 0.29},
{'source': 17, 'target': 18, 'weight': 0.28},
{'source': 61, 'target': 20, 'weight': 0.34},
{'source': 30, 'target': 4, 'weight': 0.1},
{'source': 17, 'target': 20, 'weight': 0.27},
{'source': 41, 'target': 15, 'weight': 0.09},
{'source': 30, 'target': 20, 'weight': 0.08},
{'source': 41, 'target': 9, 'weight': 0.08},
{'source': 61, 'target': 15, 'weight': 0.32},
{'source': 57, 'target': 9, 'weight': 0.12},
{'source': 55, 'target': 20, 'weight': 0.27},
{'source': 44, 'target': 9, 'weight': 0.25},
{'source': 28, 'target': 9, 'weight': 0.35},
{'source': 60, 'target': 20, 'weight': 0.17},
{'source': 30, 'target': 6, 'weight': 0.08},
{'source': 87, 'target': 70, 'weight': 0.23},
{'source': 55, 'target': 18, 'weight': 0.26},
{'source': 42, 'target': 25, 'weight': 0.12},
{'source': 44, 'target': 13, 'weight': 0.23},
{'source': 38, 'target': 35, 'weight': 0.15},
{'source': 60, 'target': 18, 'weight': 0.15},
{'source': 48, 'target': 12, 'weight': 0.2},
{'source': 38, 'target': 36, 'weight': 0.14},
{'source': 17, 'target': 12, 'weight': 0.22},
{'source': 87, 'target': 76, 'weight': 0.2},
{'source': 55, 'target': 9, 'weight': 0.22},
{'source': 17, 'target': 30, 'weight': 0.19},
{'source': 38, 'target': 15, 'weight': 0.1},
{'source': 62, 'target': 37, 'weight': 0.2},
{'source': 37, 'target': 62, 'weight': 0.23},
{'source': 44, 'target': 31, 'weight': 0.18},
{'source': 37, 'target': 15, 'weight': 0.23},
{'source': 48, 'target': 70, 'weight': 0.15},
{'source': 38, 'target': 13, 'weight': 0.09},
{'source': 61, 'target': 18, 'weight': 0.22},
{'source': 87, 'target': 9, 'weight': 0.15},
{'source': 44, 'target': 35, 'weight': 0.16},
{'source': 44, 'target': 40, 'weight': 0.15},
{'source': 44, 'target': 64, 'weight': 0.15},
{'source': 38, 'target': 9, 'weight': 0.07},
{'source': 28, 'target': 30, 'weight': 0.23},
{'source': 48, 'target': 15, 'weight': 0.13},
{'source': 38, 'target': 26, 'weight': 0.07},
{'source': 50, 'target': 22, 'weight': 0.06},
{'source': 48, 'target': 39, 'weight': 0.12},
{'source': 37, 'target': 20, 'weight': 0.18},
{'source': 87, 'target': 72, 'weight': 0.12},
{'source': 28, 'target': 5, 'weight': 0.22},
{'source': 38, 'target': 21, 'weight': 0.06},
{'source': 48, 'target': 30, 'weight': 0.09},
{'source': 37, 'target': 36, 'weight': 0.15},
{'source': 61, 'target': 71, 'weight': 0.16},
{'source': 17, 'target': 13, 'weight': 0.1},
{'source': 63, 'target': 26, 'weight': 0.14},
{'source': 37, 'target': 9, 'weight': 0.14},
{'source': 37, 'target': 22, 'weight': 0.14},
{'source': 28, 'target': 4, 'weight': 0.18},
{'source': 28, 'target': 12, 'weight': 0.18},
{'source': 44, 'target': 69, 'weight': 0.09},
{'source': 48, 'target': 72, 'weight': 0.07},
{'source': 37, 'target': 5, 'weight': 0.13},
{'source': 48, 'target': 19, 'weight': 0.06},
{'source': 28, 'target': 15, 'weight': 0.16},
{'source': 17, 'target': 67, 'weight': 0.07},
{'source': 48, 'target': 11, 'weight': 0.05},
{'source': 17, 'target': 0, 'weight': 0.07},
{'source': 28, 'target': 23, 'weight': 0.14},
{'source': 55, 'target': 71, 'weight': 0.07},
{'source': 17, 'target': 19, 'weight': 0.06},
{'source': 37, 'target': 18, 'weight': 0.1},
{'source': 62, 'target': 15, 'weight': 0.08},
{'source': 17, 'target': 28, 'weight': 0.06},
{'source': 55, 'target': 64, 'weight': 0.07},
{'source': 28, 'target': 17, 'weight': 0.14},
{'source': 55, 'target': 11, 'weight': 0.06},
{'source': 28, 'target': 19, 'weight': 0.12},
{'source': 37, 'target': 6, 'weight': 0.08},
{'source': 86, 'target': 71, 'weight': 0.07},
{'source': 28, 'target': 64, 'weight': 0.1},
{'source': 61, 'target': 67, 'weight': 0.07},
{'source': 28, 'target': 48, 'weight': 0.08},
{'source': 37, 'target': 83, 'weight': 0.05},
{'source': 28, 'target': 6, 'weight': 0.08},
{'source': 28, 'target': 1, 'weight': 0.08},
{'source': 61, 'target': 36, 'weight': 0.05},
{'source': 28, 'target': 67, 'weight': 0.06}]