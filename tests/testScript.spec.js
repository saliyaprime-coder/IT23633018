import { test, expect } from '@playwright/test';

// Positive Functional Test Cases

test('Pos_Fun_0001 – Convert simple food request', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mata bath oonee');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මට බත් ඕනේ', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0001 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0002 – Converted compound sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('api kaeema kanna yanava saha passe chithrapatiyakuth balanavaa');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('අපි කෑම කන්න යනව සහ පස්සෙ චිත්‍රපටියකුත් බලනවා', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0002 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0003 – Convert complex conditional sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('oya enavaanam mama balan innavaa.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ඔය එනවානම් මම බලන් ඉන්නවා.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0003 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0004 – Convert interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('  oyaa kavadhdha enna hithan inne?');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText(' ඔයා කවද්ද එන්න හිතන් ඉන්නේ?', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0004 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0005 – Convert imperative command', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('vahaama enna.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('වහාම එන්න.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0005 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0006 – Convert negative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mama ehema karannee naehae.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මම එහෙම කරන්නේ නැහැ.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0006 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0007 – Convert greeting', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('aayuboovan!');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ආයුබෝවන්!', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0007 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0008 – Convert polite request', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('karuNaakaralaa mata podi udhavvak karanna puLuvandha?');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0008 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0009 – Convert repeated emphasis words', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('hari hari');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('හරි හරි', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0009 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0010 – Convert mixed Singlish + English interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('Zoom meeting ekak thiyennee kiyatadha ?');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('Zoom meeting එකක් තියෙන්නේ කියටද ?', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0010 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0011 – Convert place name', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('api Kandy valata yamudha.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('අපි Kandy වලට යමුද.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0011 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0012 – Convert abbreviation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mage ID eka hambuna.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('mage ID එක හම්බුන.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0012 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0013 – Convert currency format', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('Rs. 5343 gevanna thiyenavaa.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('Rs. 5343 ගෙවන්න තියෙනවා.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0013 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0014 – Validate long mixed Singlish paragraph with requests and time references', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('heta udhaesanama mama paasal yanna kalin email check karala thiyanna onii.teacher kenekgen message ekak aavadha kiyalaa balanna. passe 9.30 AM vithara Zoom meeting ekak thiyenavaa school management system eka gaena discuss karanna. meeting eka passe api team ekka lunch ganna yanavaa saha heta venuven reports tika prepare karanna oonee. ');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('හෙට උදැසනම මම පාසල් යන්න කලින් email check කරල තියන්න ඔනී.teacher කෙනෙක්ගෙන් message එකක් ආවද කියලා බලන්න. පස්සෙ 9.30 AM විතර Zoom meeting එකක් තියෙනවා school management system එක ගැන discuss කරන්න. meeting එක පස්සෙ අපි team එක්ක lunch ගන්න යනවා සහ හෙට වෙනුවෙන් reports ටික prepare කරන්න ඕනේ.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0014 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0015 – Convert imperative request sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('eeka dhenna.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ඒක දෙන්න.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0015 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0016 – Convert negative short sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mata eeka epaa.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මට ඒක එපා.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0016 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0017 – Convert medium compound sentence with two actions', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('api udhaeesanayen gedhara idhalaa passe paasal yanna hadhannee.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('අපි උදෑසනයෙන් ගෙදර ඉදලා පස්සෙ පාසල් යන්න හදන්නේ.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0017 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0018 – Convert polite medium-length request sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('karuNaakaralaa mata documents tika email ekakata attach karalaa evanna puLuvandha?');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('කරුණාකරලා මට documents ටික email එකකට attach කරලා එවන්න පුළුවන්ද?', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0018 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0019 – Convert short future plan', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('api heta yamu.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('අපි හෙට යමු.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0019 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0020 – Convert short negative response', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('eeka hari naehae.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ඒක හරි නැහැ.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0020 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0021 – Convert medium sentence with reason', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('vaessa vahina nisaa api gedhara inna hadhanne');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('වැස්ස වහින නිසා අපි ගෙදර ඉන්න හදන්නෙ', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0021 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0022 – Convert medium sentence with request and action', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('oyaa puLuvannam mata eeka dhaen kiyala dhenna.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ඔයා පුළුවන්නම් මට ඒක දැන් කියල දෙන්න.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0022 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0023 – Convert short daily feeling expression', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mata baya hithenavaa.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මට බය හිතෙනවා.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0023 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0024 – Convert short present continuous action', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('api kathaa karanavaa.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('අපි කතා කරනවා.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0024 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_Fun_0025 – Convert medium sentence with negation and reason', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mata adha office yanna baehae nisaa mama gedhara inne.');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මට අද office යන්න බැහැ නිසා මම ගෙදර ඉන්නේ.', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_Fun_0025 Output:', result.replace('Sinhala', '').trim());
});

// Negative Functional Test Cases

test('Neg_Fun_0026 – Missing spaces', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mamagedharayanavaa');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මම ගෙදර යනවා', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_0026 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_0027 – Heavy spelling errors', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mat bath ooni');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මට බත් ඕනි', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_0027 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_0028 – Handle Singlish input with invalid special characters', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('m@m@ sellam karanavaa');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මම සෙල්ලම් කරනවා', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_0028 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_0029 – Handle punctuation replacing spaces', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('oya,enavadha');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ඔයා එනවද', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_0029 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_0030 – Handle sentence with mixed symbols and verbs', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('oya@@ heta enavadha kiyala mata kiy@nna');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ඔයා හෙට එනවද කියල මට කියන්න', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_0030 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_0031 – Handle mixed numbers and punctuation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('Today @@ meeting start venne 10ta');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('Today  meeting start වෙන්නෙ 10ට', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_0031 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_0032 – Handle incomplete Singlish sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('heta api office');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('හෙට අපි office එනවා', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_0032 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_0033 – Handle repeated meaningless words', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('oyaa oyaa oyaa enavadhra ?');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('ඔයා එනවද ?', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_0033 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_0034 – Handle sentence with excessive capitalization', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('MAMA HETA PANSAL ENAVAA');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('මම හෙට පන්සල් එනවා', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_0034 Output:', result.replace('Sinhala', '').trim());
});

test('Neg_Fun_0035 – Handle mixed language with incorrect tense markers', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('api yesterday church yannava');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('අපි Tommorow church යනවා', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Neg_Fun_0035 Output:', result.replace('Sinhala', '').trim());
});

test('Pos_UI_0036 – Output visibility validation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('api heta yamu');
    await page.waitForTimeout(3000);
    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();
    await expect(outputContainer)
        .toContainText('අපි හෙට යමු', { timeout: 15000 });
    const result = await outputContainer.innerText();
    console.log('Pos_UI_0036 Output:', result.replace('Sinhala', '').trim());
});