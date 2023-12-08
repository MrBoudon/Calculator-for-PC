const gpuModels = {
    'nvidia': ['gtx-1030', 'gtx-1050', 'gtx-1050-ti', 'gtx-1060', 'gtx-1070', 'gtx-1070-ti', 'gtx-1080', 'gtx-1080-ti', 'gtx-1630', 'gtx-1650', 'gtx-1650-super', 'gtx-1660', 'gtx-1660-super', 'gtx-1660-ti', 'gtx-650', 'gtx-650-ti', 'gtx-660', 'gtx-660-ti', 'gtx-670', 'gtx-680', 'gtx-690', 'gtx-750', 'gtx-750-ti', 'gtx-760', 'gtx-770', 'gtx-780', 'gtx-780-ti', 'gtx-950', 'gtx-960', 'gtx-970', 'gtx-980', 'gtx-980-ti', 'titan-x', 'titan-z', 'rtx-2060', 'rtx-2060-super', 'rtx-2070', 'rtx-2070-super', 'rtx-2080', 'rtx-2080-super', 'rtx-2080-ti', 'rtx-3050', 'rtx-3060', 'rtx-3060-ti', 'rtx-3070', 'rtx-3070-ti', 'rtx-3080', 'rtx-3080-ti', 'rtx-3090', 'rtx-3090-ti', 'rtx-4070-ti', 'rtx-4080', 'rtx-4090', 'titan-rtx', 'titan-v'],
    'amd-video': ['radeon-r7-240', 'radeon-r7-250', 'radeon-r7-260', 'radeon-r7-260x', 'radeon-r7-350', 'radeon-r7-360', 'radeon-r7-370', 'radeon-r9-270', 'radeon-r9-270x', 'radeon-r9-280', 'radeon-r9-280x', 'radeon-r9-285', 'radeon-r9-290', 'radeon-r9-290x', 'radeon-r9-370', 'radeon-r9-370x', 'radeon-r9-380', 'radeon-r9-380x', 'radeon-r9-390', 'radeon-r9-390x', 'radeon-rx-460', 'radeon-rx-470', 'radeon-rx-480', 'radeon-rx-540', 'radeon-rx-540x', 'radeon-rx-550', 'radeon-rx-5500-xt', 'radeon-rx-550x', 'radeon-rx-560', 'radeon-rx-5600-xt', 'radeon-rx-560x', 'radeon-rx-570', 'radeon-rx-5700', 'radeon-rx-5700-xt', 'radeon-rx-5700-xt-50th-anniversary', 'radeon-rx-570x', 'radeon-rx-580', 'radeon-rx-580x', 'radeon-rx-590', 'radeon-rx-6700-xt', 'radeon-rx-6800', 'radeon-rx-6800-xt', 'radeon-rx-6900-xt', 'radeon-rx-vega-56', 'radeon-rx-vega-64', 'radeon-vii'],
};

const cpuModels = {
    'intel': {
        'LGA1151': ['i9-9900k', 'i7-8700k', 'i7-8086k', 'i7-9700k', 'i7-9700Kf', 'i7-9700', 'i7-9700f', 'i7-7700k', 'i7-7700', 'i7-7700t', 'i5-9600kf',
            'i5-9600k', 'i5-9500f', 'i5-9500', 'i5-9400f', 'i5-9400', 'i5-8600t', 'i5-8600k', 'i5-8600', 'i5-8500t', 'i5-8500', 'i5-8400', 'i5-7600t',
            'i5-7600k', 'i5-7600', 'i5-7500t', 'i5-7500', 'i5-7400', 'i5-6600t', 'i5-6600k', 'i5-6600', 'i5-6500', 'i5-6402p', 'i5-6400', 'i3-9100f',
            'i3-9100', 'i3-8350k', 'i3-8300t', 'i3-8300', 'i3-8100', 'i3-7350k', 'i3-7320', 'i3-7300', 'i3-7100t', 'i3-7100', 'i3-6320', 'i3-6300t', 'i3-6300',
            'i3-6100t', 'i3-6100', 'i3-6098p', 'pentium-g4620', 'pentium-g4600t', 'pentium-g4600', 'pentium-g4560t', 'pentium-g4560', 'pentium-g4520', 'pentium-g4500',
            'pentium-g4400'],
        'LGA1200': ['i9-11900k', 'i9-11900kf', 'i9-11900', 'i9-10900k', 'i9-10900kf', 'i9-10900t', 'i9-10900f', 'i9-10900', 'i9-10850k', 'i7-11700k', 'i7-11700',
            'i7-10700kf', 'i7-10700k', 'i7-10700t', 'i7-10700f', 'i7-10700', 'i5-13600kf', 'i5-13600k', 'i5-13400kf', 'i5-13400f', 'i5-13400', 'i5-12600k', 'i5-12600',
            'i5-12400f', 'i5-12400', 'i5-10500t', 'i5-10500', 'i5-10400f', 'i5-10400', 'i3-12100f', 'i3-12100', 'celeron-g5920', 'celeron-g5905',
            'celeron-g5900'],
        'LGA1700': ['i9-13900kf', 'i9-13900k', 'i9-12900kf', 'i9-12900k', 'i9-12900', 'i7-13700kf', 'i7-13700k', 'i7-13700f', 'i7-13700',
            'i7-12700kf', 'i7-12700k', 'i7-12700f', 'i7-12700', 'i5-13600kf', 'i5-13400kf', 'i5-13400f', 'i5-13400', 'i5-12600k', 'i5-12600',
            'i5-12500', 'i5-12400f', 'i5-12400', 'i3-13100f', 'i3-13100', 'i3-12100f', 'i3-12100', 'pentium-gold-g7400', 'celeron-g6900'],
    },
    'amd': {
        'AM4': ['ryzen-3-1200', 'ryzen-3-1300x', 'ryzen-3-2200g', 'ryzen-3-2200ge', 'ryzen-3-2300x', 'ryzen-3-3100', 'ryzen-3-3200g', 'ryzen-3-4100', 'ryzen-3-pro-3200g', 'ryzen-3-pro-3200ge', 'ryzen-3-pro-4350g', 'ryzen-5-1400', 'ryzen-5-1500x', 'ryzen-5-1600', 'ryzen-5-1600x', 'ryzen-5-2400g', 'ryzen-5-2400ge', 'ryzen-5-2500x', 'ryzen-5-2600', 'ryzen-5-2600e', 'ryzen-5-2600x', 'ryzen-5-3350g', 'ryzen-5-3400g', 'ryzen-5-3500', 'ryzen-5-3500x', 'ryzen-5-3600', 'ryzen-5-3600x', 'ryzen-5-3600xt', 'ryzen-5-4500', 'ryzen-5-5500', 'ryzen-5-5600x', 'ryzen-5-pro-1500', 'ryzen-5-pro-1600', 'ryzen-5-pro-2400g', 'ryzen-5-pro-2400ge', 'ryzen-5-pro-2600', 'ryzen-5-pro-3600', 'ryzen-5-pro-4650g', 'ryzen-7-1700', 'ryzen-7-1700x', 'ryzen-7-1800x', 'ryzen-7-2700', 'ryzen-7-2700e', 'ryzen-7-2700x', 'ryzen-7-3700x', 'ryzen-7-3800x', 'ryzen-7-5700x', 'ryzen-7-5800x', 'ryzen-7-pro-1700', 'ryzen-7-pro-1700x', 'ryzen-7-pro-2700', 'ryzen-7-pro-2700x', 'ryzen-7-pro-3700', 'ryzen-9-3900xt', 'ryzen-9-5900x', 'ryzen-9-5950x'],
        'AM5': ['ryzen-5-7600x', 'ryzen-7-7700x', 'ryzen-9-7900x', 'ryzen-9-7950x'],
        'TR4/sTRX4': ['threadripper-1900x', 'threadripper-1920x', 'threadripper-1950x', 'threadripper-2920x', 'threadripper-2950x', 'threadripper-2970wx', 'threadripper-2990wx', 'threadripper-3960x', 'threadripper-3970x', 'threadripper-3990x'],
    },
};

const cpuSockets = {
    'intel': ['LGA1151', 'LGA1200', 'LGA1700'],
    'amd': ['AM4', 'AM5', 'sTRX4'],
    // Другие сокеты
};

const ssdPowerMap = {
    '120': 5,
    '240': 7,
    '500': 10,
    '1000': 15,
};

function populateGPUModels() {
    const gpuManufacturer = document.getElementById('gpuManufacturer').value;
    const gpuDropdown = document.getElementById('gpuModel');
    gpuDropdown.innerHTML = '<option value="">Выберите модель</option>';
    if (gpuManufacturer && gpuModels[gpuManufacturer]) {
        gpuModels[gpuManufacturer].forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            gpuDropdown.appendChild(option);
        });
        gpuDropdown.disabled = false;
    } else {
        gpuDropdown.disabled = true;
    }
}
function populateCPUSockets() {
    const cpuManufacturer = document.getElementById('cpuManufacturer').value;
    const cpuSocketDropdown = document.getElementById('cpuSocket');
    cpuSocketDropdown.innerHTML = '<option value="">Выберите сокет</option>';

    if (cpuManufacturer) {
        // Добавьте значения сокетов в зависимости от производителя
        const socketOptions = {
            'intel': ['LGA1151', 'LGA1200', 'LGA1700'],
            'amd': ['AM4', 'AM5', 'sTRX4'],
        };

        socketOptions[cpuManufacturer].forEach(socket => {
            const option = document.createElement('option');
            option.value = socket;
            option.textContent = socket;
            cpuSocketDropdown.appendChild(option);
        });

        cpuSocketDropdown.disabled = false;
    } else {
        cpuSocketDropdown.disabled = true;
    }

    // Сбросить значения моделей процессоров и отключить список
    document.getElementById('cpuModel').innerHTML = '<option value="">Выберите сокет</option>';
    document.getElementById('cpuModel').disabled = true;
}
function populateCPUModels() {
    const cpuManufacturer = document.getElementById('cpuManufacturer').value;
    const cpuSocket = document.getElementById('cpuSocket').value;
    const cpuModelDropdown = document.getElementById('cpuModel');

    cpuModelDropdown.innerHTML = '<option value="">Выберите сокет</option>';

    if (cpuManufacturer && cpuSocket) {
        // Ваши значения моделей процессоров, учитывая выбранный сокет
        const cpuModels = {
            'LGA1151': ['i9-9900k', 'i7-8700k', 'i7-8086k', 'i7-9700k', 'i7-9700Kf', 'i7-9700', 'i7-9700f', 'i7-7700k', 'i7-7700', 'i7-7700t', 'i5-9600kf',
                'i5-9600k', 'i5-9500f', 'i5-9500', 'i5-9400f', 'i5-9400', 'i5-8600t', 'i5-8600k', 'i5-8600', 'i5-8500t', 'i5-8500', 'i5-8400', 'i5-7600t',
                'i5-7600k', 'i5-7600', 'i5-7500t', 'i5-7500', 'i5-7400', 'i5-6600t', 'i5-6600k', 'i5-6600', 'i5-6500', 'i5-6402p', 'i5-6400', 'i3-9100f',
                'i3-9100', 'i3-8350k', 'i3-8300t', 'i3-8300', 'i3-8100', 'i3-7350k', 'i3-7320', 'i3-7300', 'i3-7100t', 'i3-7100', 'i3-6320', 'i3-6300t', 'i3-6300',
                'i3-6100t', 'i3-6100', 'i3-6098p', 'pentium-g4620', 'pentium-g4600t', 'pentium-g4600', 'pentium-g4560t', 'pentium-g4560', 'pentium-g4520', 'pentium-g4500',
                'pentium-g4400'],
            'LGA1200': ['i9-11900k', 'i9-11900kf', 'i9-11900', 'i9-10900k', 'i9-10900kf', 'i9-10900t', 'i9-10900f', 'i9-10900', 'i9-10850k', 'i7-11700k', 'i7-11700',
                'i7-10700kf', 'i7-10700k', 'i7-10700t', 'i7-10700f', 'i7-10700', 'i5-13600kf', 'i5-13600k', 'i5-13400kf', 'i5-13400f', 'i5-13400', 'i5-12600k', 'i5-12600',
                'i5-12400f', 'i5-12400', 'i5-10500t', 'i5-10500', 'i5-10400f', 'i5-10400', 'i3-12100f', 'i3-12100', 'celeron-g5920', 'celeron-g5905',
                'celeron-g5900'],
            'LGA1700': ['i9-13900kf', 'i9-13900k', 'i9-12900kf', 'i9-12900k', 'i9-12900', 'i7-13700kf', 'i7-13700k', 'i7-13700f', 'i7-13700',
                'i7-12700kf', 'i7-12700k', 'i7-12700f', 'i7-12700', 'i5-13600kf', 'i5-13400kf', 'i5-13400f', 'i5-13400', 'i5-12600k', 'i5-12600',
                'i5-12500', 'i5-12400f', 'i5-12400', 'i3-13100f', 'i3-13100', 'i3-12100f', 'i3-12100', 'pentium-gold-g7400', 'celeron-g6900'],
            'AM4': [
                'ryzen-3-1200', 'ryzen-3-1300x', 'ryzen-3-2200g', 'ryzen-3-2200ge', 'ryzen-3-2300x',
                'ryzen-3-3100', 'ryzen-3-3200g', 'ryzen-3-4100', 'ryzen-3-pro-3200g', 'ryzen-3-pro-3200ge',
                'ryzen-3-pro-4350g', 'ryzen-5-1400', 'ryzen-5-1500x', 'ryzen-5-1600', 'ryzen-5-1600x',
                'ryzen-5-2400g', 'ryzen-5-2400ge', 'ryzen-5-2500x', 'ryzen-5-2600', 'ryzen-5-2600e',
                'ryzen-5-2600x', 'ryzen-5-3350g', 'ryzen-5-3400g', 'ryzen-5-3500', 'ryzen-5-3500x',
                'ryzen-5-3600', 'ryzen-5-3600x', 'ryzen-5-3600xt', 'ryzen-5-4500', 'ryzen-5-5500',
                'ryzen-5-5600x', 'ryzen-5-pro-1500', 'ryzen-5-pro-1600', 'ryzen-5-pro-2400g', 'ryzen-5-pro-2400ge',
                'ryzen-5-pro-2600', 'ryzen-5-pro-3600', 'ryzen-5-pro-4650g', 'ryzen-7-1700', 'ryzen-7-1700x',
                'ryzen-7-1800x', 'ryzen-7-2700', 'ryzen-7-2700e', 'ryzen-7-2700x', 'ryzen-7-3700x', 'ryzen-7-3800x',
                'ryzen-7-5700x', 'ryzen-7-5800x', 'ryzen-7-pro-1700', 'ryzen-7-pro-1700x', 'ryzen-7-pro-2700', 'ryzen-7-pro-2700x',
                'ryzen-7-pro-3700', 'ryzen-9-3900xt', 'ryzen-9-5900x', 'ryzen-9-5950x',
            ],
            'AM5': ['ryzen-5-7600x', 'ryzen-7-7700x', 'ryzen-9-7900x', 'ryzen-9-7950x'],
            'sTRX4': ['threadripper-1900x', 'threadripper-1920x', 'threadripper-1950x', 'threadripper-2920x', 'threadripper-2950x',
                'threadripper-2970wx', 'threadripper-2990wx', 'threadripper-3960x', 'threadripper-3970x', 'threadripper-3990x'],
        };

        cpuModels[cpuSocket].forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            cpuModelDropdown.appendChild(option);
        });

        cpuModelDropdown.disabled = false;
    } else {
        cpuModelDropdown.disabled = true;
    }
}

function calculatePower() {
    const gpuManufacturer = document.getElementById('gpuManufacturer').value;
    const gpuModel = document.getElementById('gpuModel').value.trim();
    const gpuCount = parseInt(document.getElementById('gpuCount').value, 10) || 0;

    const cpuManufacturer = document.getElementById('cpuManufacturer').value;
    const cpuModel = document.getElementById('cpuModel').value.trim();

    const ssdCapacity = document.getElementById('ssdCapacity').value;
    const ssdCount = parseInt(document.getElementById('ssdCount').value, 10) || 0;

    const opticalDriveType = document.getElementById('opticalDriveType').value;

    const motherboardFormFactor = document.getElementById('motherboardFormFactor').value;

    const ramType = document.getElementById('ramType').value;
    const ramCapacity = document.getElementById('ramCapacity').value;
    const ramCount = parseInt(document.getElementById('ramCount').value, 10) || 0;

    const hddRPM = document.getElementById('hddRPM').value;
    const hddType = document.getElementById('hddType').value;
    const hddCount = parseInt(document.getElementById('hddCount').value, 10) || 0;

    const fanCount = parseInt(document.getElementById('fanCount').value, 10) || 0;
    const liquidCooling = document.getElementById('liquidCooling').value;


    if (!gpuManufacturer || !gpuModel || gpuCount <= 0 || !cpuManufacturer || !cpuModel || !ssdCapacity || ssdCount <= 0 || !opticalDriveType || !motherboardFormFactor || !ramType || !ramCapacity || ramCount <= 0) {
        alert('Пожалуйста, введите корректные значения.');
        return;
    }

    const powerMap = {

        'nvidia': {
            'gtx-1030': 30,
            'gtx-1050': 75,
            'gtx-1050-ti': 75,
            'gtx-1060': 120,
            'gtx-1070': 150,
            'gtx-1070-ti': 180,
            'gtx-1080': 180,
            'gtx-1080-ti': 250,
            'gtx-1630': 75,
            'gtx-1650': 75,
            'gtx-1650-super': 100,
            'gtx-1660': 120,
            'gtx-1660-super': 125,
            'gtx-1660-ti': 120,
            'gtx-650': 64,
            'gtx-650-ti': 110,
            'gtx-660': 130,
            'gtx-660-ti': 150,
            'gtx-670': 170,
            'gtx-680': 195,
            'gtx-690': 300,
            'gtx-750': 55,
            'gtx-750-ti': 60,
            'gtx-760': 170,
            'gtx-770': 230,
            'gtx-780': 230,
            'gtx-780-ti': 230,
            'gtx-950': 90,
            'gtx-960': 120,
            'gtx-970': 170,
            'gtx-980': 165,
            'gtx-980-ti': 250,
            'titan-x': 250,
            'titan-z': 375,
            'rtx-2060': 190,
            'rtx-2060-super': 175,
            'rtx-2070': 225,
            'rtx-2070-super': 215,
            'rtx-2080': 250,
            'rtx-2080-super': 250,
            'rtx-2080-ti': 250,
            'rtx-3050': 130,
            'rtx-3060': 170,
            'rtx-3060-ti': 200,
            'rtx-3070': 220,
            'rtx-3070-ti': 300,
            'rtx-3080': 320,
            'rtx-3080-ti': 350,
            'rtx-3090': 350,
            'rtx-3090-ti': 550,
            'rtx-4070-ti': 410,
            'rtx-4080': 440,
            'rtx-4090': 550,
            'titan-rtx': 250,
            'titan-v': 250,
        },
        'amd-video': {
            'radeon-r7-240': 30,
            'radeon-r7-250': 65,
            'radeon-r7-260': 95,
            'radeon-r7-260x': 115,
            'radeon-r7-350': 55,
            'radeon-r7-360': 100,
            'radeon-r7-370': 110,
            'radeon-r9-270': 150,
            'radeon-r9-270x': 180,
            'radeon-r9-280': 200,
            'radeon-r9-280x': 250,
            'radeon-r9-285': 190,
            'radeon-r9-290': 275,
            'radeon-r9-290x': 290,
            'radeon-r9-370': 110,
            'radeon-r9-370x': 180,
            'radeon-r9-380': 190,
            'radeon-r9-380x': 190,
            'radeon-r9-390': 275,
            'radeon-r9-390x': 275,
            'radeon-rx-460': 70,
            'radeon-rx-470': 120,
            'radeon-rx-480': 150,
            'radeon-rx-540': 40,
            'radeon-rx-540x': 50,
            'radeon-rx-550': 50,
            'radeon-rx-5500-xt': 130,
            'radeon-rx-550x': 60,
            'radeon-rx-560': 80,
            'radeon-rx-5600-xt': 150,
            'radeon-rx-560x': 90,
            'radeon-rx-570': 150,
            'radeon-rx-5700': 180,
            'radeon-rx-5700-xt': 225,
            'radeon-rx-5700-xt-50th-anniversary': 235,
            'radeon-rx-570x': 170,
            'radeon-rx-580': 185,
            'radeon-rx-580x': 200,
            'radeon-rx-590': 190,
            'radeon-rx-6700-xt': 230,
            'radeon-rx-6800': 250,
            'radeon-rx-6800-xt': 300,
            'radeon-rx-6900-xt': 300,
            'radeon-rx-vega-56': 210,
            'radeon-rx-vega-64': 295,
            'radeon-vii': 300,
        },

        'intel': {
            'i9-9900k': 95,
            'i7-8700k': 95,
            'i7-8086k': 95,
            'i7-9700k': 95,
            'i7-9700kf': 95,
            'i7-9700': 65,
            'i7-9700f': 65,
            'i7-7700k': 91,
            'i7-7700': 65,
            'i7-7700t': 35,
            'i5-9600kf': 95,
            'i5-9600k': 95,
            'i5-9500f': 65,
            'i5-9500': 65,
            'i5-9400f': 65,
            'i5-9400': 65,
            'i5-8600t': 65,
            'i5-8600k': 95,
            'i5-8600': 65,
            'i5-8500t': 65,
            'i5-8500': 65,
            'i5-8400': 65,
            'i5-7600t': 35,
            'i5-7600k': 91,
            'i5-7600': 65,
            'i5-7500t': 35,
            'i5-7500': 65,
            'i5-7400': 65,
            'i5-6600t': 35,
            'i5-6600k': 91,
            'i5-6600': 65,
            'i5-6500': 65,
            'i5-6402p': 65,
            'i5-6400': 65,
            'i3-9100f': 65,
            'i3-9100': 65,
            'i3-8350k': 91,
            'i3-8300t': 35,
            'i3-8300': 65,
            'i3-8100': 65,
            'i3-7350k': 60,
            'i3-7320': 51,
            'i3-7300': 51,
            'i3-7100t': 35,
            'i3-7100': 51,
            'i3-6320': 51,
            'i3-6300t': 35,
            'i3-6300': 51,
            'i3-6100t': 35,
            'i3-6100': 51,
            'i3-6098p': 51,
            'pentium-g4620': 54,
            'pentium-g4600t': 35,
            'pentium-g4600': 54,
            'pentium-g4560t': 35,
            'pentium-g4560': 54,
            'pentium-g4520': 54,
            'pentium-g4500': 54,
            'pentium-g4400': 54,
            'i9-11900k': 251,
            'i9-11900kf': 251,
            'i9-11900': 119,
            'i9-10900k': 250,
            'i9-10900kf': 250,
            'i9-10900t': 109,
            'i9-10900f': 109,
            'i9-10900': 109,
            'i9-10850k': 250,
            'i7-11700k': 224,
            'i7-11700': 119,
            'i7-10700kf': 224,
            'i7-10700k': 224,
            'i7-10700t': 109,
            'i7-10700f': 109,
            'i7-10700': 119,
            'i5-13600kf': 181,
            'i5-13600k': 181,
            'i5-13400kf': 148,
            'i5-13400f': 148,
            'i5-13400': 154,
            'i5-12600k': 150,
            'i5-12600': 117,
            'i5-12400f': 117,
            'i5-12400': 117,
            'i5-10500t': 109,
            'i5-10500': 117,
            'i5-10400f': 109,
            'i5-10400': 117,
            'i3-13100f': 72,
            'i3-13100': 80,
            'i3-12100f': 89,
            'i3-12100': 89,
            'celeron-g5920': 54,
            'celeron-g5905': 54,
            'celeron-g5900': 54,
            'i9-13900kf': 253,
            'i9-13900k': 253,
            'i9-12900kf': 241,
            'i9-12900k': 241,
            'i9-12900': 202,
            'i7-13700kf': 253,
            'i7-13700k': 253,
            'i7-13700f': 219,
            'i7-13700': 219,
            'i7-12700kf': 253,
            'i7-12700k': 253,
            'i7-12700f': 190,
            'i7-12700': 190,
            'i5-12500': 117,
            'pentium-gold-g7400': 46,
            'celeron-g6900': 46,

        },
        'amd': {
            'ryzen-3-1200': 65,
            'ryzen-3-1300x': 65,
            'ryzen-3-2200g': 65,
            'ryzen-3-2200ge': 65,
            'ryzen-3-2300x': 65,
            'ryzen-3-3100': 65,
            'ryzen-3-3200g': 65,
            'ryzen-3-4100': 76,
            'ryzen-3-pro-3200g': 65,
            'ryzen-3-pro-3200ge': 35,
            'ryzen-3-pro-4350g': 65,
            'ryzen-5-1400': 65,
            'ryzen-5-1500x': 65,
            'ryzen-5-1600': 65,
            'ryzen-5-1600x': 65,
            'ryzen-5-2400g': 65,
            'ryzen-5-2400ge': 65,
            'ryzen-5-2500x': 65,
            'ryzen-5-2600': 65,
            'ryzen-5-2600e': 65,
            'ryzen-5-2600x': 95,
            'ryzen-5-3350g': 65,
            'ryzen-5-3400g': 65,
            'ryzen-5-3500': 65,
            'ryzen-5-3500x': 65,
            'ryzen-5-3600': 65,
            'ryzen-5-3600x': 95,
            'ryzen-5-3600xt': 95,
            'ryzen-5-4500': 76,
            'ryzen-5-5500': 65,
            'ryzen-5-5600x': 76,
            'ryzen-5-pro-1500': 65,
            'ryzen-5-pro-1600': 65,
            'ryzen-5-pro-2400g': 65,
            'ryzen-5-pro-2400ge': 65,
            'ryzen-5-pro-2600': 65,
            'ryzen-5-pro-3600': 95,
            'ryzen-5-pro-4650g': 65,
            'ryzen-7-1700': 65,
            'ryzen-7-1700x': 95,
            'ryzen-7-1800x': 95,
            'ryzen-7-2700': 65,
            'ryzen-7-2700e': 65,
            'ryzen-7-2700x': 105,
            'ryzen-7-3700x': 65,
            'ryzen-7-3800x': 105,
            'ryzen-7-5700x': 65,
            'ryzen-7-5800x': 131,
            'ryzen-7-pro-1700': 65,
            'ryzen-7-pro-1700x': 95,
            'ryzen-7-pro-2700': 65,
            'ryzen-7-pro-2700x': 95,
            'ryzen-7-pro-3700': 95,
            'ryzen-9-3900xt': 105,
            'ryzen-9-5900x': 142,
            'ryzen-9-5950x': 142,
            'ryzen-5-7600x': 142,
            'ryzen-7-7700x': 142,
            'ryzen-9-7900x': 230,
            'ryzen-9-7950x': 240,
            'threadripper-1900x': 125,
            'threadripper-1920x': 180,
            'threadripper-1950x': 180,
            'threadripper-2920x': 180,
            'threadripper-2950x': 180,
            'threadripper-2970wx': 250,
            'threadripper-2990wx': 250,
            'threadripper-3960x': 280,
            'threadripper-3970x': 280,
            'threadripper-3990x': 280,
        },

        'ssd': {
            '120': 15,
            '240': 15,
            '500': 15,
            '1000': 15,
        },
        'optical-drive': {
            'cd-rom': 15,
            'blu-ray': 30,
            'cd-rw': 16,
            'combo': 24,
            'dvd-rom': 20,
            'dvd-rw': 30,
        },
        'motherboard': {
            'atx': 20,
            'microatx': 15,
            'mini-atx': 30,
            'ssi-ceb': 150,
            'ssi-eeb': 150,
            'thin-mini-itx': 20,
            'xl-atx': 130,

        },
        'ram': {
            'ddr3': {
                '4': 5,
                '8': 10,
                '16': 20,
                '32': 25,
            },
            'ddr4': {
                '4': 7,
                '8': 15,
                '16': 25,
                '32': 30,
            },

        },
        'hdd': {
            '3.5': {
                '7200': 15,
                '5400': 10,
            },
            '2.5': {
                '7200': 10,
                '5400': 7,
            },

        },
        'cooling': {
            'fan': {
                '0': 0,
                '1': 5,
                '2': 10,
                '3': 15,
                '4': 20,
                '5': 25,
                '6': 30,
                '7': 35,
                '8': 40,
                '9': 45,
                '10': 50,
                '11': 55,
                '12': 60,
            },
            'liquid': {
                'none': 0,
                '1-1': 15,
                '1-2': 20,
                '1-3': 25,
                '2-2': 30,
                '2-3': 35,
                '2-4': 40,
                '2-5': 45,
                '2-6': 50,

            },
        },
    };

    const selectedCPUModels = {
        'LGA1151': ['i9-9900k', 'i7-8700k'],
        'LGA1200': ['i9-10900k', 'i7-10700k'],
        'AM4': ['ryzen-9-5900x', 'ryzen-7-3700x'],
        'sTRX4': ['threadripper-3970x', 'threadripper-3960x'],
    };

    const totalPower =
        (powerMap[gpuManufacturer.toLowerCase()][gpuModel.toLowerCase()] * gpuCount) +
        (powerMap[cpuManufacturer.toLowerCase()][cpuModel.toLowerCase()]) + // Убрано умножение на cpuCount
        (ssdPowerMap[ssdCapacity] * ssdCount) +
        powerMap['optical-drive'][opticalDriveType] +
        powerMap['motherboard'][motherboardFormFactor] +
        (powerMap['ram'][ramType.toLowerCase()][ramCapacity] * ramCount)+
        (powerMap['hdd'][hddType][hddRPM] * hddCount)+
        (powerMap['cooling']['fan'][fanCount]) +
        (powerMap['cooling']['liquid'][liquidCooling]);



    document.getElementById('result').innerHTML = `<p>Рекомендуемая мощность блока питания: ${totalPower} ватт</p>`;
}


//Git Boudon