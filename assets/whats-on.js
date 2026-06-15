(() => {
  "use strict";

  const encodedReadings = {
    1: "Gen 1-2|Psa 1-2|Matt 1-2;Gen 3-4|Psa 3-5|Matt 3-4;Gen 5-6|Psa 6-8|Matt 5;Gen 7-8|Psa 9-10|Matt 6;Gen 9-10|Psa 11-13|Matt 7;Gen 11-12|Psa 14-16|Matt 8;Gen 13-14|Psa 17|Matt 9;Gen 15-16|Psa 18|Matt 10;Gen 17-18|Psa 19-21|Matt 11;Gen 19|Psa 22|Matt 12;Gen 20-21|Psa 23-25|Matt 13;Gen 22-23|Psa 26-28|Matt 14;Gen 24|Psa 29-30|Matt 15;Gen 25-26|Psa 31|Matt 16;Gen 27|Psa 32|Matt 17;Gen 28-29|Psa 33|Matt 18;Gen 30|Psa 34|Matt 19;Gen 31|Psa 35|Matt 20;Gen 32-33|Psa 36|Matt 21;Gen 34-35|Psa 37|Matt 22;Gen 36|Psa 38|Matt 23;Gen 37|Psa 39-40|Matt 24;Gen 38|Psa 41-43|Matt 25;Gen 39-40|Psa 44|Matt 26;Gen 41|Psa 45|Matt 27;Gen 42-43|Psa 46-48|Matt 28;Gen 44-45|Psa 49|Rom 1-2;Gen 46-47|Psa 50|Rom 3-4;Gen 48-50|Psa 51-52|Rom 5-6;Exo 1-2|Psa 53-55|Rom 7-8;Exo 3-4|Psa 56-57|Rom 9",
    2: "Exo 5-6|Psa 58-59|Rom 10-11;Exo 7-8|Psa 60-61|Rom 12;Exo 9|Psa 62-63|Rom 13-14;Exo 10|Psa 64-65|Rom 15-16;Exo 11-12|Psa 66-67|Mark 1;Exo 13-14|Psa 68|Mark 2;Exo 15|Psa 69|Mark 3;Exo 16|Psa 70-71|Mark 4;Exo 17-18|Psa 72|Mark 5;Exo 19-20|Psa 73|Mark 6;Exo 21|Psa 74|Mark 7;Exo 22|Psa 75-76|Mark 8;Exo 23|Psa 77|Mark 9;Exo 24-25|Psa 78|Mark 10;Exo 26|Psa 79-80|Mark 11;Exo 27|Psa 81-82|Mark 12;Exo 28|Psa 83-84|Mark 13;Exo 29|Psa 85-86|Mark 14;Exo 30|Psa 87-88|Mark 15-16;Exo 31-32|Psa 89|1Cor 1-2;Exo 33-34|Psa 90-91|1Cor 3;Exo 35|Psa 92-93|1Cor 4-5;Exo 36|Psa 94-95|1Cor 6;Exo 37|Psa 96-99|1Cor 7;Exo 38|Psa 100-101|1Cor 8-9;Exo 39-40|Psa 102|1Cor 10;Lev 1-2|Psa 103|1Cor 11;Lev 3-4|Psa 104|1Cor 12-13",
    3: "Lev 5-6|Psa 105|1Cor 14;Lev 7|Psa 106|1Cor 15;Lev 8|Psa 107|1Cor 16;Lev 9-10|Psa 108-109|2Cor 1-2;Lev 11|Psa 110-112|2Cor 3-4;Lev 12-13|Psa 113-114|2Cor 5-7;Lev 14|Psa 115-116|2Cor 8-9;Lev 15|Psa 117-118|2Cor 10-11;Lev 16|Ps.1191-41|2Cor 12-13;Lev 17-18|Ps.11941-80|Luke 1;Lev 19|Ps.11981-128|Luke 2;Lev 20|Ps.119129-176|Luke 3;Lev 21|Psa 120-124|Luke 4;Lev 22|Psa 125-127|Luke 5;Lev 23|Psa 128-130|Luke 6;Lev 24|Psa 131-134|Luke 7;Lev 25|Psa 135-136|Luke 8;Lev 26|Psa 137-139|Luke 9;Lev 27|Psa 140-142|Luke 10;Num 1|Psa 143-144|Luke 11;Num 2|Psa 145-147|Luke 12;Num 3|Psa 148-150|Luke 13-14;Num 4|Prov 1|Luke 15;Num 5|Prov 2|Luke 16;Num 6|Prov 3|Luke 17;Num 7|Prov 4|Luke 18;Num 8-9|Prov 5|Luke 19;Num 10|Prov 6|Luke 20;Num 11|Prov 7|Luke 21;Num 12-13|Prov 8-9|Luke 22;Num 14|Prov 10|Luke 23",
    4: "Num 15|Prov 11|Luke 24;Num 16|Prov 12|Gal 1-2;Num 17-18|Prov 13|Gal 3-4;Num 19|Prov 14|Gal 5-6;Num 20-21|Prov 15|Eph 1-2;Num 22-23|Prov 16|Eph 3-4;Num 24-25|Prov 17|Eph 5-6;Num 26|Prov 18|Phil 1-2;Num 27|Prov 19|Phil 3-4;Num 28|Prov 20|John 1;Num 29-30|Prov 21|John 2-3;Num 31|Prov 22|John 4;Num 32|Prov 23|John 5;Num 33|Prov 24|John 6;Num 34|Prov 25|John 7;Num 35|Prov 26|John 8;Num 36|Prov 27|John 9-10;Deut 1|Prov 28|John 11;Deut 2|Prov 29|John 12;Deut 3|Prov 30|John 13-14;Deut 4|Prov 31|John 15-16;Deut 5|Ecc 1|John 17-18;Deut 6-7|Ecc 2|John 19;Deut 8-9|Ecc 3|John 20-21;Deut 10-11|Ecc 4|Acts 1;Deut 12|Ecc 5|Acts 2;Deut 13-14|Ecc 6|Acts 3-4;Deut 15|Ecc 7|Acts 5-6;Deut 16|Ecc 8|Acts 7;Deut 17|Ecc 9|Acts 8",
    5: "Deut 18|Ecc 10|Acts 9;Deut 19|Ecc 11|Acts 10;Deut 20|Ecc 12|Acts 11-12;Deut 21|Song 1|Acts 13;Deut 22|Song 2|Acts 14-15;Deut 23|Song 3|Acts 16-17;Deut 24|Song 4|Acts 18-19;Deut 25|Song 5|Acts 20;Deut 26|Song 6|Acts 21-22;Deut 27|Song 7|Acts 23-24;Deut 28|Song 8|Acts 25-26;Deut 29|Isa 1|Acts 27;Deut 30|Isa 2|Acts 28;Deut 31|Isa 3-4|Col 1;Deut 32|Isa 5|Col 2;Deut 33-34|Isa 6|Col 3-4;Josh 1|Isa 7|1Thes 1-2;Josh 2|Isa 8|1Thes 3-4;Josh 3-4|Isa 9|1Thes 5;Josh 5-6|Isa 10|2Thes 1-2;Josh 7|Isa 11|2Thes 3;Josh 8|Isa 12|1Tim 1-3;Josh 9|Isa 13|1Tim 4-5;Josh 10|Isa 14|1Tim 6;Josh 11|Isa 15|2Tim 1;Josh 12|Isa 16|2Tim 2;Josh 13|Isa 17-18|2Tim 3-4;Josh 14|Isa 19|Tit 1-3;Josh 15|Isa 20-21|Philem 1;Josh 16|Isa 22|Heb 1-2;Josh 17|Isa 23|Heb 3-5",
    6: "Josh 18|Isa 24|Heb 6-7;Josh 19|Isa 25|Heb 8-9;Josh 20-21|Isa 26-27|Heb 10;Josh 22|Isa 28|Heb 11;Josh 23-24|Isa 29|Heb 12;Judg 1|Isa 30|Heb 13;Judg 2-3|Isa 31|James 1;Judg 4-5|Isa 32|James 2;Judg 6|Isa 33|James 3-4;Judg 7-8|Isa 34|James 5;Judg 9|Isa 35|1Pet 1;Judg 10-11|Isa 36|1Pet 2;Judg 12-13|Isa 37|1Pet 3-5;Judg 14-15|Isa 38|2Pet 1-2;Judg 16|Isa 39|2Pet 3;Judg 17-18|Isa 40|1John 1-2;Judg 19|Isa 41|1John 3-4;Judg 20|Isa 42|1John 5;Judg 21|Isa 43|2John, 3John;Ruth 1-2|Isa 44|Jude 1;Ruth 3-4|Isa 45|Rev 1-2;1Sam 1|Isa 46-47|Rev 3-4;1Sam 2|Isa 48|Rev 5-6;1Sam 3|Isa 49|Rev 7-9;1Sam 4|Isa 50|Rev 10-11;1Sam 5-6|Isa 51|Rev 12-13;1Sam 7-8|Isa 52|Rev 14;1Sam 9|Isa 53|Rev 15-16;1Sam 10|Isa 54|Rev 17-18;1Sam 11-12|Isa 55|Rev 19-20",
    7: "1Sam 13|Isa 56-57|Rev 21-22;1Sam 14|Isa 58|Matt 1-2;1Sam 15|Isa 59|Matt 3-4;1Sam 16|Isa 60|Matt 5;1Sam 17|Isa 61|Matt 6;1Sam 18|Isa 62|Matt 7;1Sam 19|Isa 63|Matt 8;1Sam 20|Isa 64|Matt 9;1Sam 21-22|Isa 65|Matt 10;1Sam 23|Isa 66|Matt 11;1Sam 24|Jer 1|Matt 12;1Sam 25|Jer 2|Matt 13;1Sam 26-27|Jer 3|Matt 14;1Sam 28|Jer 4|Matt 15;1Sam 29-30|Jer 5|Matt 16;1Sam 31|Jer 6|Matt 17;2Sam 1|Jer 7|Matt 18;2Sam 2|Jer 8|Matt 19;2Sam 3|Jer 9|Matt 20;2Sam 4-5|Jer 10|Matt 21;2Sam 6|Jer 11|Matt 22;2Sam 7|Jer 12|Matt 23;2Sam 8-9|Jer 13|Matt 24;2Sam 10|Jer 14|Matt 25;2Sam 11|Jer 15|Matt 26;2Sam 12|Jer 16|Matt 27;2Sam 13|Jer 17|Matt 28;2Sam 14|Jer 18|Rom 1-2;2Sam 15|Jer 19|Rom 3-4;2Sam 16|Jer 20|Rom 5-6;2Sam 17|Jer 21|Rom 7-8",
    8: "2Sam 18|Jer 22|Rom 9;2Sam 19|Jer 23|Rom 10-11;2Sam 20-21|Jer 24|Rom 12;2Sam 22|Jer 25|Rom 13-14;2Sam 23|Jer 26|Rom 15-16;2Sam 24|Jer 27|Mark 1;1Kin 1|Jer 28|Mark 2;1Kin 2|Jer 29|Mark 3;1Kin 3|Jer 30|Mark 4;1Kin 4-5|Jer 31|Mark 5;1Kin 6|Jer 32|Mark 6;1Kin 7|Jer 33|Mark 7;1Kin 8|Jer 34|Mark 8;1Kin 9|Jer 35|Mark 9;1Kin 10|Jer 36|Mark 10;1Kin 11|Jer 37|Mark 11;1Kin 12|Jer 38|Mark 12;1Kin 13|Jer 39|Mark 13;1Kin 14|Jer 40|Mark 14;1Kin 15|Jer 41|Mark 15;1Kin 16|Jer 42|Mark 16;1Kin 17|Jer 43|1Cor 1-2;1Kin 18|Jer 44|1Cor 3;1Kin 19|Jer 45-46|1Cor 4-5;1Kin 20|Jer 47|1Cor 6;1Kin 21|Jer 48|1Cor 7;1Kin 22|Jer 49|1Cor 8-9;2Kin 1-2|Jer 50|1Cor 10;2Kin 3|Jer 51|1Cor 11;2Kin 4|Jer 52|1Cor 12-13;2Kin 5|Lam 1|1Cor 14",
    9: "2Kin 6|Lam 2|1Cor 15;2Kin 7|Lam 3|1Cor 16;2Kin 8|Lam 4|2Cor 1-2;2Kin 9|Lam 5|2Cor 3-4;2Kin 10|Eze 1|2Cor 5-7;2Kin 11-12|Eze 2|2Cor 8-9;2Kin 13|Eze 3|2Cor 10-11;2Kin 14|Eze 4|2Cor 12-13;2Kin 15|Eze 5|Luke 1;2Kin 16|Eze 6|Luke 2;2Kin 17|Eze 7|Luke 3;2Kin 18|Eze 8|Luke 4;2Kin 19|Eze 9|Luke 5;2Kin 20|Eze 10|Luke 6;2Kin 21|Eze 11|Luke 7;2Kin 22-23|Eze 12|Luke 8;2Kin 24-25|Eze 13|Luke 9;1Chron 1|Eze 14|Luke 10;1Chron 2|Eze 15|Luke 11;1Chron 3|Eze 16|Luke 12;1Chron 4|Eze 17|Luke 13-14;1Chron 5|Eze 18|Luke 15;1Chron 6|Eze 19|Luke 16;1Chron 7|Eze 20|Luke 17;1Chron 8|Eze 21|Luke 18;1Chron 9|Eze 22|Luke 19;1Chron 10|Eze 23|Luke 20;1Chron 11|Eze 24|Luke 21;1Chron 12|Eze 25|Luke 22;1Chron 13-14|Eze 26|Luke 23",
    10: "1Chron 15|Eze 27|Luke 24;1Chron 16|Eze 28|Gal 1-2;1Chron 17|Eze 29|Gal 3-4;1Chron 18-19|Eze 30|Gal 5-6;1Chron 20-21|Eze 31|Eph 1-2;1Chron 22|Eze 32|Eph 3-4;1Chron 23|Eze 33|Eph 5-6;1Chron 24-25|Eze 34|Phil 1-2;1Chron 26|Eze 35|Phil 3-4;1Chron 27|Eze 36|John 1;1Chron 28|Eze 37|John 2-3;1Chron 29|Eze 38|John 4;2Chron 1-2|Eze 39|John 5;2Chron 3-4|Eze 40|John 6;2Chron 5-6|Eze 41|John 7;2Chron 7|Eze 42|John 8;2Chron 8|Eze 43|John 9-10;2Chron 9|Eze 44|John 11;2Chron 10-11|Eze 45|John 12;2Chron 12-13|Eze 46|John 13-14;2Chron 14-15|Eze 47|John 15-16;2Chron 16-17|Eze 48|John 17-18;2Chron 18-19|Dan 1|John 19;2Chron 20|Dan 2|John 20-21;2Chron 21-22|Dan 3|Acts 1;2Chron 23|Dan 4|Acts 2;2Chron 24|Dan 5|Acts 3-4;2Chron 25|Dan 6|Acts 5-6;2Chron 26-27|Dan 7|Acts 7;2Chron 28|Dan 8|Acts 8;2Chron 29|Dan 9|Acts 9",
    11: "2Chron 30|Dan 10|Acts 10;2Chron 31|Dan 11|Acts 11-12;2Chron 32|Dan 12|Acts 13;2Chron 33|Hos 1|Acts 14-15;2Chron 34|Hos 2|Acts 16-17;2Chron 35|Hos 3|Acts 18-19;2Chron 36|Hos 4|Acts 20;Ezra 1-2|Hos 5|Acts 21-22;Ezra 3-4|Hos 6|Acts 23-24;Ezra 5-6|Hos 7|Acts 25-26;Ezra 7|Hos 8|Acts 27;Ezra 8|Hos 9|Acts 28;Ezra 9|Hos 10|Col 1;Ezra 10|Hos 11|Col 2;Neh 1-2|Hos 12|Col 3-4;Neh 3|Hos 13|1Thes 1-2;Neh 4|Hos 14|1Thes 3-4;Neh 5-6|Joel 1|1Thes 5;Neh 7|Joel 2|2Thes 1-2;Neh 8|Joel 3|2Thes 3;Neh 9|Amos 1|1Tim 1-3;Neh 10|Amos 2|1Tim 4-5;Neh 11|Amos 3|1Tim 6;Neh 12|Amos 4|2Tim 1;Neh 13|Amos 5|2Tim 2;Est 1|Amos 6|2Tim 3-4;Est 2|Amos 7|Tit 1-3;Est 3-4|Amos 8|Philem 1;Est 5-6|Amos 9|Heb 1-2;Est 7-8|Obad 1|Heb 3-5",
    12: "Est 9-10|Jonah 1|Heb 6-7;Job 1-2|Jonah 2-3|Heb 8-9;Job 3-4|Jonah 4|Heb 10;Job 5|Mic 1|Heb 11;Job 6-7|Mic 2|Heb 12;Job 8|Mic 3-4|Heb 13;Job 9|Mic 5|James 1;Job 10|Mic 6|James 2;Job 11|Mic 7|James 3-4;Job 12|Nah 1-2|James 5;Job 13|Nah 3|1Pet 1;Job 14|Hab 1|1Pet 2;Job 15|Hab 2|1Pet 3-5;Job 16-17|Hab 3|2Pet 1-2;Job 18-19|Zeph 1|2Pet 3;Job 20|Zeph 2|1John 1-2;Job 21|Zeph 3|1John 3-4;Job 22|Hag 1-2|1John 5;Job 23-24|Zech 1|2John, 3John;Job 25-27|Zech 2-3|Jude 1;Job 28|Zech 4-5|Rev 1-2;Job 29-30|Zech 6-7|Rev 3-4;Job 31-32|Zech 8|Rev 5-6;Job 33|Zech 9|Rev 7-9;Job 34|Zech 10|Rev 10-11;Job 35-36|Zech 11|Rev 12-13;Job 37|Zech 12|Rev 14;Job 38|Zech 13-14|Rev 15-16;Job 39|Mal 1|Rev 17-18;Job 40|Mal 2|Rev 19-20;Job 41-42|Mal 3-4|Rev 21-22"
  };

  const readingPlan = Object.fromEntries(
    Object.entries(encodedReadings).map(([month, days]) => [
      Number(month),
      days.split(";").map((day) => day.split("|"))
    ])
  );

  const bookNames = {
    en: {
      Gen: "Genesis", Exo: "Exodus", Lev: "Leviticus", Num: "Numbers",
      Deut: "Deuteronomy", Josh: "Joshua", Judg: "Judges", Ruth: "Ruth",
      "1Sam": "1 Samuel", "2Sam": "2 Samuel", "1Kin": "1 Kings",
      "2Kin": "2 Kings", "1Chron": "1 Chronicles", "2Chron": "2 Chronicles",
      Ezra: "Ezra", Neh: "Nehemiah", Est: "Esther", Job: "Job",
      Psa: "Psalms", Prov: "Proverbs", Ecc: "Ecclesiastes",
      Song: "Song of Songs", Isa: "Isaiah", Jer: "Jeremiah",
      Lam: "Lamentations", Eze: "Ezekiel", Dan: "Daniel", Hos: "Hosea",
      Joel: "Joel", Amos: "Amos", Obad: "Obadiah", Jonah: "Jonah",
      Mic: "Micah", Nah: "Nahum", Hab: "Habakkuk", Zeph: "Zephaniah",
      Hag: "Haggai", Zech: "Zechariah", Mal: "Malachi", Matt: "Matthew",
      Mark: "Mark", Luke: "Luke", John: "John", Acts: "Acts",
      Rom: "Romans", "1Cor": "1 Corinthians", "2Cor": "2 Corinthians",
      Gal: "Galatians", Eph: "Ephesians", Phil: "Philippians",
      Col: "Colossians", "1Thes": "1 Thessalonians",
      "2Thes": "2 Thessalonians", "1Tim": "1 Timothy",
      "2Tim": "2 Timothy", Tit: "Titus", Philem: "Philemon",
      Heb: "Hebrews", James: "James", "1Pet": "1 Peter",
      "2Pet": "2 Peter", "1John": "1 John", "2John": "2 John",
      "3John": "3 John", Jude: "Jude", Rev: "Revelation"
    },
    fa: {
      Gen: "پیدایش", Exo: "خروج", Lev: "لاویان", Num: "اعداد",
      Deut: "تثنیه", Josh: "یوشع", Judg: "داوران", Ruth: "روت",
      "1Sam": "اول سموئیل", "2Sam": "دوم سموئیل", "1Kin": "اول پادشاهان",
      "2Kin": "دوم پادشاهان", "1Chron": "اول تواریخ",
      "2Chron": "دوم تواریخ", Ezra: "عزرا", Neh: "نحمیا", Est: "استر",
      Job: "ایوب", Psa: "مزامیر", Prov: "امثال", Ecc: "جامعه",
      Song: "غزل غزل‌ها", Isa: "اشعیا", Jer: "ارمیا", Lam: "مراثی",
      Eze: "حزقیال", Dan: "دانیال", Hos: "هوشع", Joel: "یوئیل",
      Amos: "عاموس", Obad: "عوبدیا", Jonah: "یونس", Mic: "میکاه",
      Nah: "ناحوم", Hab: "حبقوق", Zeph: "صفنیا", Hag: "حجی",
      Zech: "زکریا", Mal: "ملاکی", Matt: "متی", Mark: "مرقس",
      Luke: "لوقا", John: "یوحنا", Acts: "اعمال رسولان", Rom: "رومیان",
      "1Cor": "اول قرنتیان", "2Cor": "دوم قرنتیان", Gal: "غلاطیان",
      Eph: "افسسیان", Phil: "فیلیپیان", Col: "کولسیان",
      "1Thes": "اول تسالونیکیان", "2Thes": "دوم تسالونیکیان",
      "1Tim": "اول تیموتائوس", "2Tim": "دوم تیموتائوس", Tit: "تیطس",
      Philem: "فلیمون", Heb: "عبرانیان", James: "یعقوب",
      "1Pet": "اول پطرس", "2Pet": "دوم پطرس", "1John": "اول یوحنا",
      "2John": "دوم یوحنا", "3John": "سوم یوحنا", Jude: "یهودا",
      Rev: "مکاشفه"
    }
  };

  const copy = {
    en: {
      locale: "en-GB",
      weekPrefix: "Week commencing",
      dailyReadings: "Daily readings",
      memorial: "Memorial Service (Breaking of Bread)",
      bibleHour: "Bible Hour and Sunday School",
      dailyDiscussion: "Daily Readings discussion",
      online: "Online",
      sisters: "Sisters' Class",
      sistersShort: "Sisters'",
      contacts: "Contacts Class",
      contactsShort: "Contacts",
      bibleClass: "Bible Class",
      noRegularMeeting: "No regular meeting",
      sundayMeetings: "10:30am and 12:30pm",
      thursdayTime: "7:45pm",
      times: { sundayMorning: "10:30am", sundayLunch: "12:30pm", regular: "7:45pm", contacts: "8pm" }
    },
    fa: {
      locale: "fa-IR-u-ca-gregory",
      weekPrefix: "هفته آغازشونده از",
      dailyReadings: "قرائت‌های روزانه",
      memorial: "مراسم یادبود (شکستن نان)",
      bibleHour: "ساعت کتاب‌مقدس و مدرسه یکشنبه",
      dailyDiscussion: "گفت‌وگوی قرائت‌های روزانه",
      online: "آنلاین",
      sisters: "کلاس خواهران",
      sistersShort: "خواهران",
      contacts: "کلاس مخاطبان",
      contactsShort: "مخاطبان",
      bibleClass: "کلاس کتاب‌مقدس",
      noRegularMeeting: "جلسه منظم هفتگی برگزار نمی‌شود",
      sundayMeetings: "۱۰:۳۰ و ۱۲:۳۰",
      thursdayTime: "۷:۴۵ شب",
      times: { sundayMorning: "۱۰:۳۰ صبح", sundayLunch: "۱۲:۳۰ ظهر", regular: "۷:۴۵ شب", contacts: "۸ شب" }
    }
  };

  const bookKeys = Object.keys(bookNames.en).sort((a, b) => b.length - a.length);
  const sistersAnchor = new Date(2026, 5, 16);

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function startOfWeek(date) {
    const result = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    result.setDate(result.getDate() - result.getDay());
    return result;
  }

  function isoDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function toPersianDigits(value) {
    const digits = "۰۱۲۳۴۵۶۷۸۹";
    return value.replace(/\d/g, (digit) => digits[Number(digit)]);
  }

  function expandReading(reading, language) {
    if (reading.startsWith("Ps.119")) {
      const verses = reading.slice("Ps.119".length);
      const result = `${language === "fa" ? "مزمور" : "Psalm"} 119:${verses}`;
      return language === "fa" ? toPersianDigits(result.replaceAll("-", "–")) : result.replaceAll("-", "–");
    }

    let expanded = reading;
    for (const key of bookKeys) {
      expanded = expanded.replaceAll(key, bookNames[language][key]);
    }
    expanded = expanded.replaceAll("-", "–");
    return language === "fa" ? toPersianDigits(expanded) : expanded;
  }

  function readingsFor(date, language) {
    const month = date.getMonth() + 1;
    let day = date.getDate();

    // The Bible Companion follows a 365-day calendar. Use 28 February on leap day.
    if (month === 2 && day === 29) {
      day = 28;
    }

    return readingPlan[month][day - 1].map((reading) => expandReading(reading, language));
  }

  function formatShortDate(date, language) {
    return new Intl.DateTimeFormat(copy[language].locale, {
      day: "numeric",
      month: "short"
    }).format(date);
  }

  function formatWeekDate(date, language) {
    return new Intl.DateTimeFormat(copy[language].locale, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  }

  function formatWeekday(date, language) {
    return new Intl.DateTimeFormat(copy[language].locale, {
      weekday: "short"
    }).format(date);
  }

  function utcDayNumber(date) {
    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000;
  }

  function tuesdayClass(date, language) {
    const weeksFromAnchor = Math.round((utcDayNumber(date) - utcDayNumber(sistersAnchor)) / 7);
    const isSistersWeek = Math.abs(weeksFromAnchor) % 2 === 0;
    const labels = copy[language];

    return isSistersWeek
      ? { title: labels.sisters, shortTitle: labels.sistersShort, time: labels.times.regular, isoTime: "19:45" }
      : { title: labels.contacts, shortTitle: labels.contactsShort, time: labels.times.contacts, isoTime: "20:00" };
  }

  function eventsFor(date, language) {
    const labels = copy[language];

    switch (date.getDay()) {
      case 0:
        return [
          { time: labels.times.sundayMorning, isoTime: "10:30", title: labels.memorial },
          { time: labels.times.sundayLunch, isoTime: "12:30", title: labels.bibleHour }
        ];
      case 1:
      case 3:
      case 5:
        return [{ time: labels.times.regular, isoTime: "19:45", title: labels.dailyDiscussion, format: labels.online }];
      case 2:
        return [tuesdayClass(date, language)];
      case 4:
        return [{ time: labels.times.regular, isoTime: "19:45", title: labels.bibleClass }];
      default:
        return [];
    }
  }

  function renderEvents(date, language) {
    const events = eventsFor(date, language);
    if (events.length === 0) {
      return `<p><strong>${copy[language].noRegularMeeting}</strong></p>`;
    }

    return events.map((event) => {
      const format = event.format ? `<span class="meeting-format">${event.format}</span>` : "";
      return `<p><time datetime="${isoDate(date)}T${event.isoTime}">${event.time}</time> <strong>${event.title}</strong>${format}</p>`;
    }).join("");
  }

  function renderWeekSchedule(container, weekStart) {
    const language = container.dataset.lang === "fa" ? "fa" : "en";
    const labels = copy[language];

    container.innerHTML = Array.from({ length: 7 }, (_, index) => {
      const date = addDays(weekStart, index);
      const classes = ["schedule-card"];
      if (index === 0) classes.push("schedule-card-sunday");
      if (index === 6) classes.push("schedule-card-muted");

      return `
        <article class="${classes.join(" ")}">
          <div class="schedule-date">
            <span>${formatWeekday(date, language)}</span>
            <strong>${formatShortDate(date, language)}</strong>
          </div>
          <div class="schedule-events">${renderEvents(date, language)}</div>
          <div class="schedule-readings">
            <span>${labels.dailyReadings}</span>
            <p>${readingsFor(date, language).join("<br>")}</p>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderFourSundays(container, weekStart) {
    const language = container.dataset.lang === "fa" ? "fa" : "en";
    const labels = copy[language];

    container.innerHTML = Array.from({ length: 4 }, (_, index) => {
      const sunday = addDays(weekStart, index * 7);
      const tuesday = addDays(sunday, 2);
      const tuesdayDetails = tuesdayClass(tuesday, language);
      const tuesdayTime = tuesdayDetails.time === labels.times.contacts
        ? labels.times.contacts
        : labels.times.regular;

      return `
        <tr>
          <th scope="row">${formatShortDate(sunday, language)}</th>
          <td>${labels.sundayMeetings}</td>
          <td>${tuesdayDetails.shortTitle}${language === "fa" ? "، " : ", "}${tuesdayTime}</td>
          <td>${labels.thursdayTime}</td>
        </tr>
      `;
    }).join("");
  }

  const weekStart = startOfWeek(new Date());

  document.querySelectorAll("[data-current-week]").forEach((element) => {
    const language = document.documentElement.lang === "fa" ? "fa" : "en";
    element.textContent = `${copy[language].weekPrefix} ${formatWeekDate(weekStart, language)}`;
  });

  document.querySelectorAll("[data-week-schedule]").forEach((container) => {
    renderWeekSchedule(container, weekStart);
  });

  document.querySelectorAll("[data-four-sundays]").forEach((container) => {
    renderFourSundays(container, weekStart);
  });
})();
