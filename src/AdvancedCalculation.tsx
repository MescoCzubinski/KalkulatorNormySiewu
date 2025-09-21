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
  const [LiczbaZiarniakowSkrajnychValue, setLiczbaZiarniakowSkrajnychValue] =
    useState<string>("");
  const [LiczbaKloskowSrodkowychValue, setLiczbaKloskowSrodkowychValue] =
    useState<string>("");
  const [LiczbaKloskowZewnetrznychValue, setLiczbaKloskowZewnetrznychValue] =
    useState<string>("");
  const [LiczbaKloskowSkrajnychValue, setLiczbaKloskowSkrajnychValue] =
    useState<string>("");
  const [PlonZKlosaValue, setPlonZKlosaValue] = useState<string>("");
  const [RozkrzewieniaValue, setRozkrzewieniaValue] = useState<string>("");
  const [ZdolnosciWschodowValue, setZdolnosciWschodowValue] =
    useState<string>("");
  const [StratyZimoweValue, setStratyZimoweValue] = useState<string>("");
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
    setPlonZKlosaValue("");
    setRozkrzewieniaValue("");
    setZdolnosciWschodowValue("");
    setStratyZimoweValue("");
    setIsReset(false);
  }, [isReset, setIsReset]);

  const [liczbaZiarniakowValue, setLiczbaZiarniakowValue] =
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
  const calculateLiczbaZiarniakow = () => {
    const MTZPlonu = Number(MTZPlonuValue);
    const plon = Number(PlonValue);
    const liczbaZiarniakow = (plon * 100000) / MTZPlonu;

    if (
      isNaN(liczbaZiarniakow) ||
      !isFinite(liczbaZiarniakow) ||
      liczbaZiarniakow === 0
    ) {
      setLiczbaZiarniakowValue("uzupełnij wartości");
    } else if (liczbaZiarniakow > 999999) {
      setLiczbaZiarniakowValue("za dużo");
    } else {
      setLiczbaZiarniakowValue(
        liczbaZiarniakow.toFixed(0).toString() + " szt./m²"
      );
    }
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

    const liczbaKloskowRazem =
      liczbaKloskowSrodkowych +
      liczbaKloskowZewnetrznych +
      liczbaKloskowSkrajnych;
    if (
      isNaN(liczbaKloskowRazem) ||
      !isFinite(liczbaKloskowRazem) ||
      liczbaKloskowRazem === 0
    ) {
      setLiczbaKloskowRazem("uzupełnij wartości");
    } else if (liczbaKloskowRazem > 999999) {
      setLiczbaKloskowRazem("za dużo");
    } else {
      setLiczbaKloskowRazem(liczbaKloskowRazem.toFixed(0).toString() + " szt.");
    }

    const liczbaZiarniakowWKlosie =
      liczbaZiarniakowSrodkowych * liczbaKloskowSrodkowych +
      liczbaZiarniakowZewnetrznych * liczbaKloskowZewnetrznych +
      liczbaZiarniakowSkrajnych * liczbaKloskowSkrajnych;
    if (
      isNaN(liczbaZiarniakowWKlosie) ||
      !isFinite(liczbaZiarniakowWKlosie) ||
      liczbaZiarniakowWKlosie === 0
    ) {
      setLiczbaZiarniakowWKlosie("uzupełnij wartości");
    } else if (liczbaZiarniakowWKlosie > 999999) {
      setLiczbaZiarniakowWKlosie("za dużo");
    } else {
      setLiczbaZiarniakowWKlosie(
        liczbaZiarniakowWKlosie.toFixed(0).toString() + " szt."
      );
    }
  };
  const calculateObsadaKlosow = () => {
    const obsadaKlosow = (Number(PlonValue) * 100) / Number(PlonZKlosaValue);

    if (isNaN(obsadaKlosow) || !isFinite(obsadaKlosow) || obsadaKlosow === 0) {
      setObsadaKlosow("uzupełnij wartości");
    } else if (obsadaKlosow > 999999) {
      setObsadaKlosow("za dużo");
    } else {
      setObsadaKlosow(obsadaKlosow.toFixed(0).toString() + " szt./m²");
    }
  };
  const calculateZyweWiosna = () => {
    const zyweWiosna =
      Number(obsadaKlosow.split(" ")[0]) / Number(RozkrzewieniaValue);
    if (isNaN(zyweWiosna) || !isFinite(zyweWiosna) || zyweWiosna === 0) {
      setZyweWiosna("uzupełnij wartości");
    } else if (zyweWiosna > 999999) {
      setZyweWiosna("za dużo");
    } else {
      setZyweWiosna(zyweWiosna.toFixed(0).toString() + " szt./m²");
    }
  };
  const calculateZiarniakiDoSiewu = () => {
    const ziarniakiDoSiewu =
      Number(zyweWiosna.split(" ")[0]) /
      (Number(ZdolnosciWschodowValue) * 0.01) /
      ((100 - Number(StratyZimoweValue)) * 0.01);

    if (
      isNaN(ziarniakiDoSiewu) ||
      !isFinite(ziarniakiDoSiewu) ||
      ziarniakiDoSiewu === 0
    ) {
      setZiarniakiDoSiewu("uzupełnij wartości");
    } else if (ziarniakiDoSiewu > 999999) {
      setZiarniakiDoSiewu("za dużo");
    } else {
      setZiarniakiDoSiewu(ziarniakiDoSiewu.toFixed(0).toString() + " szt./m²");
    }
  };
  const calculateNormaSiewu = () => {
    const normaSiewu =
      (Number(ziarniakiDoSiewu.split(" ")[0]) *
        Number(MTZMaterialuSiewnegoValue)) /
      100;

    if (isNaN(normaSiewu) || !isFinite(normaSiewu) || normaSiewu === 0) {
      setNormaSiewu("uzupełnij wartości");
    } else if (normaSiewu > 999999) {
      setNormaSiewu("za dużo");
    } else {
      setNormaSiewu(normaSiewu.toFixed(2).toString() + " kg/ha");
    }
  };

  useEffect(() => {
    calculateLiczbaZiarniakow();
    calculateKlosy();
    calculateObsadaKlosow();
    calculateZyweWiosna();
    calculateZiarniakiDoSiewu();
    calculateNormaSiewu();
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
    PlonZKlosaValue,
    RozkrzewieniaValue,
    ZdolnosciWschodowValue,
    StratyZimoweValue,
    normaSiewu,
  ]);

  return (
    <>
      <Section title="Parametry podstawowe" showTitleOnMobile={false}>
        <Input
          number
          value={MTZMaterialuSiewnegoValue}
          setValue={setMTZMaterialuSiewnegoValue}
          title="MTZ materiału siewnego"
          placeholder="Podaj MTZ"
          unit="g"
        />
        <Input
          number
          value={MTZPlonuValue}
          setValue={setMTZPlonuValue}
          title="MTZ plonu"
          placeholder="Podaj MTZ"
          unit="g"
        />
        <Input
          number
          value={PlonValue}
          setValue={setPlonValue}
          title="Plon"
          placeholder="Podaj plon"
          unit="t/ha"
        />
        <Result title="Liczba ziarniaków:" result={liczbaZiarniakowValue} />
      </Section>
      <Section title="Ziarniaki i kłoski" showTitleOnMobile={false}>
        <div className="flex gap-x-2">
          <img src="/EarIcon.png" alt="kłos" className="w-24 h-fit" />
          <div className="flex flex-col flex-1 justify-around">
            <Input
              number
              value={LiczbaZiarniakowSkrajnychValue}
              setValue={setLiczbaZiarniakowSkrajnychValue}
              title="Ziarniaki skrajne"
              placeholder="Podaj liczbę ziarniaków"
              unit="szt."
            />
            <Input
              number
              value={LiczbaKloskowSkrajnychValue}
              setValue={setLiczbaKloskowSkrajnychValue}
              title="Kłoski skrajne"
              placeholder="Podaj liczbę kłosek"
              unit="szt."
            />
            <Input
              number
              value={LiczbaZiarniakowZewnetrznychValue}
              setValue={setLiczbaZiarniakowZewnetrznychValue}
              title="Ziarniaki zewnętrzne"
              placeholder="Podaj liczbę ziarniaków"
              unit="szt."
            />
            <Input
              number
              value={LiczbaKloskowZewnetrznychValue}
              setValue={setLiczbaKloskowZewnetrznychValue}
              title="Kłoski zewnętrzne"
              placeholder="Podaj liczbę kłosek"
              unit="szt."
            />
            <Input
              number
              value={LiczbaZiarniakowSrodkowychValue}
              setValue={setLiczbaZiarniakowSrodkowychValue}
              title="Ziarniaki środkowe"
              placeholder="Podaj liczbę ziarniaków"
              unit="szt."
            />
            <Input
              number
              value={LiczbaKloskowSrodkowychValue}
              setValue={setLiczbaKloskowSrodkowychValue}
              title="Kłoski środkowe"
              placeholder="Podaj liczbę kłosek"
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
      <Section title="Parametry podstawowe" showTitleOnMobile={false}>
        <Input
          number
          value={PlonZKlosaValue}
          setValue={setPlonZKlosaValue}
          title="Plon z jednego kłosa"
          placeholder="Podaj plon z kłosa"
          unit="g/kłos"
        />
        <Result title="Obsada kłosów:" result={obsadaKlosow} />
        <Input
          number
          value={RozkrzewieniaValue}
          setValue={setRozkrzewieniaValue}
          title="Rozkrzewienia"
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
      </Section>
    </>
  );
}
