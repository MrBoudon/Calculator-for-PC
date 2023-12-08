<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Калькулятор</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="calculator">
    <div class="column">
        <h2>Видеокарты</h2>
        <form id="powerCalculatorGPU">
            <label  for="gpuManufacturer">Производитель видеокарты:</label>
            <select id="gpuManufacturer" name="gpuManufacturer" onchange="populateGPUModels()">
                <option value="">Выберите</option>
                <option value="nvidia">Nvidia</option>
                <option value="amd-video">AMD</option>
            </select>

            <label  for="gpuModel">Модель видеокарты:</label>
            <select id="gpuModel" name="gpuModel" disabled>
                <option value="">Выберите производителя</option>
            </select>

            <label  for="gpuCount">Количество видеокарт:</label>
            <input type="number" id="gpuCount" name="gpuCount" placeholder="Введите количество" required>
        </form>
    </div>

    <div class="column">
        <h2>SSD-диск</h2>
        <form id="powerCalculatorSSD">
            <label for="ssdCapacity">Объем SSD:</label>
            <select id="ssdCapacity" name="ssdCapacity">
                <option value="120">120 GB</option>
                <option value="240">240 GB</option>
                <option value="500">500 GB</option>
                <option value="1000">1 TB</option>
            </select>

            <label for="ssdCount">Количество SSD:</label>
            <input type="number" id="ssdCount" name="ssdCount" placeholder="Введите количество" required>
        </form>
    </div>

    <div class="column">
        <h2>Процессоры</h2>
        <form id="powerCalculatorCPU">
            <label for="cpuManufacturer">Производитель процессора:</label>
            <select id="cpuManufacturer" name="cpuManufacturer" onchange="populateCPUSockets()">
                <option value="">Выберите</option>
                <option value="intel">Intel</option>
                <option value="amd">AMD</option>
            </select>

            <label for="cpuSocket">Сокет процессора:</label>
            <select id="cpuSocket" name="cpuSocket" onchange="populateCPUModels()">
                <option value="">Выберите производителя</option>

            </select>

            <label for="cpuModel">Модель процессора:</label>
            <select id="cpuModel" name="cpuModel" disabled>
                <option value="">Выберите сокет</option>
            </select>
        </form>
    </div>

    <div class="column">
        <h2>Оптический привод</h2>
        <form id="powerCalculatorOpticalDrive">
            <label for="opticalDriveType">Тип оптического привода:</label>
            <select id="opticalDriveType" name="opticalDriveType">
                <option value="cd-rom">CD-ROM</option>
                <option value="blu-ray">Blu-ray</option>
                <option value="cd-rw">CD-RW</option>
                <option value="combo">COMBO</option>
                <option value="dvd-rom">DVD-ROM</option>
                <option value="dvd-rw">DVD-RW</option>
            </select>
        </form>
    </div>

    <div class="column">
        <h2>Оперативная память</h2>
        <form id="powerCalculatorRAM">
            <label for="ramType">Тип ОЗУ:</label>
            <select id="ramType" name="ramType">
                <option value="ddr3">DDR3</option>
                <option value="ddr4">DDR4</option>
            </select>

            <label for="ramCapacity">Объем ОЗУ:</label>
            <select id="ramCapacity" name="ramCapacity">
                <option value="4">4 GB</option>
                <option value="8">8 GB</option>
                <option value="16">16 GB</option>
                <option value="32">32 GB</option>
            </select>

            <label for="ramCount">Количество модулей ОЗУ:</label>
            <input type="number" id="ramCount" name="ramCount" placeholder="Введите количество" required>
        </form>
    </div>

    <div class="column">
        <h2>Материнская плата</h2>
        <form id="powerCalculatorMotherboard">
            <label for="motherboardFormFactor">Форм-фактор материнской платы:</label>
            <select id="motherboardFormFactor" name="motherboardFormFactor">
                <option value="atx">ATX</option>
                <option value="microatx">Micro ATX</option>
                <option value="mini-atx">Mini-ATX</option>
                <option value="ssi-ceb">SSI CEB</option>
                <option value="ssi-eeb">SSI EEB</option>
                <option value="thin-mini-itx">Thin Mini-ITX</option>
                <option value="xl-atx">XL ATX</option>
            </select>
        </form>
    </div>


    <div class="column">
        <h2>Жесткие диски</h2>
        <form id="powerCalculatorHDD">
            <label for="hddRPM">Обороты в минуту (RPM):</label>
            <select id="hddRPM" name="hddRPM">
                <option value="7200">7200 RPM</option>
                <option value="5400">5400 RPM</option>
            </select>

            <label for="hddType">Типоразмер HDD:</label>
            <select id="hddType" name="hddType">
                <option value="3.5">3.5 дюйма</option>
                <option value="2.5">2.5 дюйма</option>
            </select>

            <label for="hddCount">Количество HDD:</label>
            <input type="number" id="hddCount" name="hddCount" placeholder="Введите количество" required>
        </form>
    </div>

    <div class="column">
        <h2>Охлаждение</h2>
        <form id="powerCalculatorCooling">
            <label for="fanCount">Количество вентиляторов:</label>
            <select id="fanCount" name="fanCount">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>

            <label for="liquidCooling">Система водяного охлаждения (СВО):</label>
            <select id="liquidCooling" name="liquidCooling">
                <option value="none">Нету</option>
                <option value="1-1">1 помпа, 1 вентилятор</option>
                <option value="1-2">1 помпа, 2 вентилятора</option>
                <option value="1-3">1 помпа, 3 вентилятора</option>
                <option value="2-2">2 помпы, 2 вентилятора</option>
                <option value="2-3">2 помпы, 3 вентилятора</option>
                <option value="2-4">2 помпы, 4 вентилятора</option>
                <option value="2-5">2 помпы, 5 вентиляторов</option>
                <option value="2-6">2 помпы, 6 вентиляторов</option>
            </select>
        </form>
    </div>

</div>
<div class="rese">
    <button type="button" onclick="calculatePower()">Рассчитать</button>
    <div class="rqwe2" id="result"></div>
</div>
<script src="./js/script.js"></script>
</body>
</html>