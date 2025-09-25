import Section from "./components/Section.tsx";
import Input from "./components/Input.tsx";
import { useState, useEffect } from "react";
import Result from "./components/Result.tsx";

type AdvancedCalculationProps = {
  isReset: boolean;
  setIsReset: (value: boolean) => void;
};

export default function AdvancedCalculation({
  isReset,
  setIsReset,
}: AdvancedCalculationProps) {
  const [MTZMaterialuSiewnegoValue, setMTZMaterialuSiewnegoValue] =
    useState<string>("");
  const [MTZPlonuValue, setMTZPlonuValue] = useState<string>("");
  const [PlonValue, setPlonValue] = useState<string>("");

  const [LiczbaZiarniakowSrodkowychValue, setLiczbaZiarniakowSrodkowychValue] =
    useState<string>("");
  const [
    LiczbaZiarniakowZewnetrznychValue,
    setLiczbaZiarniakowZewnetrznychValue,
  ] = useState<string>("");
  const [
    LiczbaZiarniakowZewnetrznych2Value,
    setLiczbaZiarniakowZewnetrznych2Value,
  ] = useState<string>("");
  const [LiczbaZiarniakowSkrajnychValue, setLiczbaZiarniakowSkrajnychValue] =
    useState<string>("");
  const [LiczbaZiarniakowSkrajnych2Value, setLiczbaZiarniakowSkrajnych2Value] =
    useState<string>("");
  const [LiczbaKloskowSrodkowychValue, setLiczbaKloskowSrodkowychValue] =
    useState<string>("");
  const [LiczbaKloskowZewnetrznychValue, setLiczbaKloskowZewnetrznychValue] =
    useState<string>("");
  const [LiczbaKloskowZewnetrznych2Value, setLiczbaKloskowZewnetrznych2Value] =
    useState<string>("");
  const [LiczbaKloskowSkrajnychValue, setLiczbaKloskowSkrajnychValue] =
    useState<string>("");
  const [LiczbaKloskowSkrajnych2Value, setLiczbaKloskowSkrajnych2Value] =
    useState<string>("");
  const [RozkrzewieniaValue, setRozkrzewieniaValue] = useState<string>("");
  const [ZdolnosciWschodowValue, setZdolnosciWschodowValue] =
    useState<string>("");
  const [StratyZimoweValue, setStratyZimoweValue] = useState<string>("");
  const [powierzchniaValue, setPowierzchniaValue] = useState<string>("");
  useEffect(() => {
    setMTZMaterialuSiewnegoValue("");
    setMTZPlonuValue("");
    setPlonValue("");
    setLiczbaZiarniakowSrodkowychValue("");
    setLiczbaZiarniakowZewnetrznychValue("");
    setLiczbaZiarniakowSkrajnychValue("");
    setLiczbaKloskowSrodkowychValue("");
    setLiczbaKloskowZewnetrznychValue("");
    setLiczbaKloskowSkrajnychValue("");
    setLiczbaZiarniakowZewnetrznych2Value("");
    setLiczbaKloskowZewnetrznych2Value("");
    setLiczbaKloskowSkrajnych2Value("");
    setLiczbaZiarniakowSkrajnych2Value("");
    setRozkrzewieniaValue("");
    setZdolnosciWschodowValue("");
    setStratyZimoweValue("");
    setPowierzchniaValue("");
    setIsReset(false);
  }, [isReset, setIsReset]);

  const setResult = (result: number, unit: string, decimalPlaces: number) => {
    if (isNaN(result) || !isFinite(result) || result === 0) {
      return "uzupełnij wartości";
    } else if (result > 999999) {
      return "za dużo";
    } else {
      return (
        result.toLocaleString("pl-PL", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }) +
        " " +
        unit
      );
    }
  };

  const [liczbaZiarniakow, setliczbaZiarniakow] =
    useState<string>("uzupełnij wartości");
  const [liczbaZiarniakowWKlosie, setLiczbaZiarniakowWKlosie] =
    useState<string>("uzupełnij wartości");
  const [liczbaKloskowRazem, setLiczbaKloskowRazem] =
    useState<string>("uzupełnij wartości");
  const [obsadaKlosow, setObsadaKlosow] =
    useState<string>("uzupełnij wartości");
  const [zyweWiosna, setZyweWiosna] = useState<string>("uzupełnij wartości");
  const [ziarniakiDoSiewu, setZiarniakiDoSiewu] =
    useState<string>("uzupełnij wartości");
  const [normaSiewu, setNormaSiewu] = useState<string>("uzupełnij wartości");
  const [plonZKlosa, setPlonZKlosa] = useState<string>("uzupełnij wartości");
  const [zapotrzebowanie, setZapotrzebowanie] =
    useState<string>("uzupełnij wartości");
  const calculateLiczbaZiarniakow = () => {
    const MTZPlonu = Number(MTZPlonuValue);
    const plon = Number(PlonValue);
    const liczbaZiarniakow = (plon * 100000) / MTZPlonu;

    setliczbaZiarniakow(setResult(liczbaZiarniakow, "szt./m²", 0));
  };
  const calculateKlosy = () => {
    const liczbaZiarniakowSrodkowych = Number(LiczbaZiarniakowSrodkowychValue);
    const liczbaZiarniakowZewnetrznych = Number(
      LiczbaZiarniakowZewnetrznychValue
    );
    const liczbaZiarniakowSkrajnych = Number(LiczbaZiarniakowSkrajnychValue);
    const liczbaKloskowSrodkowych = Number(LiczbaKloskowSrodkowychValue);
    const liczbaKloskowZewnetrznych = Number(LiczbaKloskowZewnetrznychValue);
    const liczbaKloskowSkrajnych = Number(LiczbaKloskowSkrajnychValue);
    const liczbaZiarniakowZewnetrznych2 = Number(
      LiczbaZiarniakowZewnetrznych2Value
    );
    const liczbaZiarniakowSkrajnych2 = Number(LiczbaZiarniakowSkrajnych2Value);
    const liczbaKloskowZewnetrznych2 = Number(LiczbaKloskowZewnetrznych2Value);
    const liczbaKloskowSkrajnych2 = Number(LiczbaKloskowSkrajnych2Value);

    const liczbaKloskowRazem =
      liczbaKloskowSrodkowych +
      liczbaKloskowZewnetrznych +
      liczbaKloskowSkrajnych +
      liczbaKloskowZewnetrznych2 +
      liczbaKloskowSkrajnych2;

    setLiczbaKloskowRazem(setResult(liczbaKloskowRazem, "szt.", 0));

    const liczbaZiarniakowWKlosie =
      liczbaZiarniakowSrodkowych * liczbaKloskowSrodkowych +
      liczbaZiarniakowZewnetrznych * liczbaKloskowZewnetrznych +
      liczbaZiarniakowSkrajnych * liczbaKloskowSkrajnych +
      liczbaZiarniakowSkrajnych2 * liczbaKloskowSkrajnych2 +
      liczbaZiarniakowZewnetrznych2 * liczbaKloskowZewnetrznych2;
    setLiczbaZiarniakowWKlosie(setResult(liczbaZiarniakowWKlosie, "szt.", 0));
  };
  const calculateObsadaKlosow = () => {
    const obsadaKlosow =
      (Number(PlonValue) * 100) /
      Number(plonZKlosa.split(" ")[0].replace(",", "."));

    console.log(PlonValue);
    console.log(plonZKlosa.split(" ")[0].replace(",", "."));
    console.log(obsadaKlosow);
    setObsadaKlosow(setResult(obsadaKlosow, "szt./m²", 0));
  };
  const calculateZyweWiosna = () => {
    const zyweWiosna =
      Number(obsadaKlosow.split(" ")[0].replace(",", ".")) /
      Number(RozkrzewieniaValue);
    setZyweWiosna(setResult(zyweWiosna, "szt./m²", 0));
  };
  const calculatePlonZKlosa = () => {
    const plonZKlosa =
      (Number(liczbaZiarniakowWKlosie.split(" ")[0].replace(",", ".")) *
        Number(MTZPlonuValue)) /
      1000;
    setPlonZKlosa(setResult(plonZKlosa, "g", 2));
  };
  const calculateZiarniakiDoSiewu = () => {
    const ziarniakiDoSiewu =
      Number(zyweWiosna.split(" ")[0].replace(",", ".")) /
      (Number(ZdolnosciWschodowValue) * 0.01) /
      ((100 - Number(StratyZimoweValue)) * 0.01);

    setZiarniakiDoSiewu(setResult(ziarniakiDoSiewu, "szt./m²", 0));
  };
  const calculateNormaSiewu = () => {
    const normaSiewu =
      (Number(ziarniakiDoSiewu.split(" ")[0].replace(",", ".")) *
        Number(MTZMaterialuSiewnegoValue)) /
      100;

    setNormaSiewu(setResult(normaSiewu, "kg/ha", 2));
  };
  const calculateZapotrzebowanie = () => {
    const zapotrzebowanie =
      Number(normaSiewu.split(" ")[0].replace(",", ".")) *
      Number(powierzchniaValue);

    setZapotrzebowanie(setResult(zapotrzebowanie, "kg", 2));
  };

  useEffect(() => {
    calculateLiczbaZiarniakow();
    calculateKlosy();
    calculateObsadaKlosow();
    calculateZyweWiosna();
    calculatePlonZKlosa();
    calculateZiarniakiDoSiewu();
    calculateNormaSiewu();
    calculateZapotrzebowanie();
  }, [
    MTZMaterialuSiewnegoValue,
    MTZPlonuValue,
    PlonValue,
    LiczbaKloskowSkrajnychValue,
    LiczbaKloskowZewnetrznychValue,
    LiczbaKloskowSrodkowychValue,
    LiczbaZiarniakowSrodkowychValue,
    LiczbaZiarniakowZewnetrznychValue,
    LiczbaZiarniakowSkrajnychValue,
    LiczbaKloskowZewnetrznych2Value,
    LiczbaKloskowSkrajnych2Value,
    LiczbaZiarniakowSkrajnych2Value,
    LiczbaZiarniakowSkrajnych2Value,
    RozkrzewieniaValue,
    ZdolnosciWschodowValue,
    StratyZimoweValue,
    liczbaZiarniakow,
    liczbaZiarniakowWKlosie,
    liczbaKloskowRazem,
    obsadaKlosow,
    zyweWiosna,
    ziarniakiDoSiewu,
    normaSiewu,
    plonZKlosa,
    zapotrzebowanie,
    powierzchniaValue,
  ]);

  return (
    <>
      <Section title="Parametry podstawowe" showTitleOnMobile={true}>
        <Input
          number
          value={MTZMaterialuSiewnegoValue}
          setValue={setMTZMaterialuSiewnegoValue}
          title="MTZ materiału siewnego"
          placeholder="Podaj MTZ nasion"
          unit="g"
        />
        <Input
          number
          value={MTZPlonuValue}
          setValue={setMTZPlonuValue}
          title="MTZ plonu"
          placeholder="Podaj MTZ plonu"
          unit="g"
        />
        <Input
          number
          value={PlonValue}
          setValue={setPlonValue}
          title="Zakładany plon"
          placeholder="Podaj plon"
          unit="t/ha"
        />
        <Result title="Obsada ziarniaków:" result={liczbaZiarniakow} />
      </Section>
      <Section title="Kłoski i ziarniaki" showTitleOnMobile={true}>
        <div className="flex gap-x-2 relative h-fit">
          <img
            src="./EarIcon.png"
            alt="kłos"
            className="absolute top-0 opacity-50 left-[calc(50%-3rem)] w-16"
          />
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 justify-around top-0">
            <Input
              number
              value={LiczbaKloskowSkrajnychValue}
              setValue={setLiczbaKloskowSkrajnychValue}
              title="Kłoski"
              placeholder="szczytowe"
              unit="szt."
            />
            <Input
              number
              value={LiczbaZiarniakowSkrajnychValue}
              setValue={setLiczbaZiarniakowSkrajnychValue}
              title="Ziarniaki"
              placeholder="szczytowe"
              unit="szt."
            />
            <Input
              number
              value={LiczbaKloskowZewnetrznychValue}
              setValue={setLiczbaKloskowZewnetrznychValue}
              title=""
              placeholder="zewnętrzne"
              unit="szt."
            />
            <Input
              number
              value={LiczbaZiarniakowZewnetrznychValue}
              setValue={setLiczbaZiarniakowZewnetrznychValue}
              title=""
              placeholder="zewnętrzne"
              unit="szt."
            />
            <Input
              number
              value={LiczbaKloskowSrodkowychValue}
              setValue={setLiczbaKloskowSrodkowychValue}
              title=""
              placeholder="środkowe"
              unit="szt."
            />
            <Input
              number
              value={LiczbaZiarniakowSrodkowychValue}
              setValue={setLiczbaZiarniakowSrodkowychValue}
              title=""
              placeholder="środkowe"
              unit="szt."
            />
            <Input
              number
              value={LiczbaKloskowZewnetrznych2Value}
              setValue={setLiczbaKloskowZewnetrznych2Value}
              title=""
              placeholder="zewnętrzne"
              unit="szt."
            />
            <Input
              number
              value={LiczbaZiarniakowZewnetrznych2Value}
              setValue={setLiczbaZiarniakowZewnetrznych2Value}
              title=""
              placeholder="zewnętrzne"
              unit="szt."
            />
            <Input
              number
              value={LiczbaKloskowSkrajnych2Value}
              setValue={setLiczbaKloskowSkrajnych2Value}
              title=""
              placeholder="dolne"
              unit="szt."
            />
            <Input
              number
              value={LiczbaZiarniakowSkrajnych2Value}
              setValue={setLiczbaZiarniakowSkrajnych2Value}
              title=""
              placeholder="dolne"
              unit="szt."
            />
          </div>
        </div>
        <Result title="Liczba kłosków:" result={liczbaKloskowRazem} />
        <Result
          title="Liczba ziarniaków w kłosie:"
          result={liczbaZiarniakowWKlosie}
        />
      </Section>
      <Section title="Obliczenia szczegółowe" showTitleOnMobile={true}>
        <Result title="Plon z jednego kłosa:" result={plonZKlosa} />
        <Result title="Planowana obsada kłosów:" result={obsadaKlosow} />
        <Input
          number
          value={RozkrzewieniaValue}
          setValue={setRozkrzewieniaValue}
          title="Planowana liczba rozkrzewień"
          placeholder="Podaj rozkrzewienia"
          unit="szt./rośl."
        />
        <Result title="Żywe rośliny wiosną:" result={zyweWiosna} />
        <Input
          number
          value={ZdolnosciWschodowValue}
          setValue={setZdolnosciWschodowValue}
          title="Połowa zdolności wschodów"
          placeholder="Podaj zdolność"
          unit=" %"
        />
        <Input
          number
          value={StratyZimoweValue}
          setValue={setStratyZimoweValue}
          title="Straty zimowe"
          placeholder="Podaj straty"
          unit="%"
        />
        <Result title="Ziarniaki do siewu:" result={ziarniakiDoSiewu} />
        <Result title="Norma siewu:" result={normaSiewu} />
        <Input
          number
          value={powierzchniaValue}
          setValue={setPowierzchniaValue}
          title="Oblicz zapotrzebowanie na Twoje pole"
          placeholder="podaj powierzchnię pola"
          unit="ha"
        />
        <Result title="Zapotrzebowanie:" result={zapotrzebowanie} />
      </Section>
    </>
  );
}
