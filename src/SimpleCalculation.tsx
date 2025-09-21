import Section from "./components/Section.tsx";
import Input from "./components/Input.tsx";
import Result from "./components/Result.tsx";
import { useState, useEffect } from "react";
type SimpleCalculationProps = {
  isReset: boolean;
  setIsReset: (value: boolean) => void;
};

export default function SimpleCalculation({
  isReset,
  setIsReset,
}: SimpleCalculationProps) {
  const [MTZValue, setMTZValue] = useState<string>("");
  const [ObsadaValue, setObsadaValue] = useState<string>("");
  const [SilaKielkowaniaValue, setSilaKielkowaniaValue] = useState<string>("");
  const [CzystoscNasionValue, setCzystoscNasionValue] = useState<string>("");
  const [PochodzenieNasionValue, setPochodzenieNasionValue] =
    useState<string>("");
  const [GlebaValue, setGlebaValue] = useState<string>("");
  const [TerminSiewuValue, setTerminSiewuValue] = useState<string>("");
  const [KrzewistoscOdmianyValue, setKrzewistoscOdmianyValue] =
    useState<string>("");
  const [powierzchniaValue, setPowierzchniaValue] = useState<string>("");

  useEffect(() => {
    setMTZValue("");
    setObsadaValue("");
    setSilaKielkowaniaValue("");
    setCzystoscNasionValue("");
    setPochodzenieNasionValue("");
    setGlebaValue("");
    setTerminSiewuValue("");
    setKrzewistoscOdmianyValue("");
    setPowierzchniaValue("");
    setIsReset(false);
  }, [isReset, setIsReset]);

  const [normaSiewuValue, setNormaSiewuValue] =
    useState<string>("uzupełnij wartości");
  const [zapotrzebowanieValue, setZapotrzebowanieValue] =
    useState<string>("uzupełnij wartości");

  const calculateNormaSiewu = () => {
    const grainMass = Number(MTZValue);
    const grainDensity = Number(ObsadaValue);
    const germinationStrength = Number(SilaKielkowaniaValue);
    const grainPurity = Number(CzystoscNasionValue);
    const grainOrigin = Number(PochodzenieNasionValue);
    const soil = Number(GlebaValue);
    const sowingTerm = Number(TerminSiewuValue);
    const varietyType = Number(KrzewistoscOdmianyValue);
    let sowingRate =
      (grainMass * grainDensity) /
      (germinationStrength *
        grainPurity *
        grainOrigin *
        soil *
        sowingTerm *
        varietyType);

    sowingRate = Math.round(sowingRate * 10000) / 100;
    if (isNaN(sowingRate) || !isFinite(sowingRate)) {
      setNormaSiewuValue("uzupełnij wartości");
    } else if (sowingRate > 99999) {
      setNormaSiewuValue("za dużo");
    } else {
      setNormaSiewuValue(sowingRate.toFixed(2).toString() + " kg/ha");
    }
  };

  const calculateZapotrzebowanie = () => {
    const sowingRate = Number(normaSiewuValue.split(" ")[0]);
    const area = Number(powierzchniaValue);
    const demand = sowingRate * area;
    if (isNaN(demand) || !isFinite(demand) || demand === 0) {
      setZapotrzebowanieValue("uzupełnij wartości");
    } else if (demand > 99999) {
      setZapotrzebowanieValue("za dużo");
    } else {
      setZapotrzebowanieValue(demand.toFixed(2).toString() + " kg");
    }
  };

  useEffect(() => {
    calculateNormaSiewu();
    calculateZapotrzebowanie();
  }, [
    MTZValue,
    ObsadaValue,
    SilaKielkowaniaValue,
    CzystoscNasionValue,
    PochodzenieNasionValue,
    GlebaValue,
    TerminSiewuValue,
    KrzewistoscOdmianyValue,
    powierzchniaValue,
    normaSiewuValue,
  ]);

  return (
    <>
      <Section title="czynniki podstawowe" showTitleOnMobile={false}>
        <Input
          number
          value={MTZValue}
          setValue={setMTZValue}
          title="Masa tysiąca ziaren (MTZ)"
          placeholder="Podaj MTZ"
          unit="g"
        />
        <Input
          number
          value={ObsadaValue}
          setValue={setObsadaValue}
          title="Obsada"
          placeholder="Podaj obsadę"
          unit="szt./m²"
        />
        <Input
          number
          value={SilaKielkowaniaValue}
          setValue={setSilaKielkowaniaValue}
          title="Siła kiełkowania"
          placeholder="Podaj siłę kiełkowania"
          unit="%"
        />
        <Input
          number
          value={CzystoscNasionValue}
          setValue={setCzystoscNasionValue}
          title="Czystość nasion"
          placeholder="Podaj czystość nasion"
          unit="%"
        />
      </Section>
      <Section title="czynniki dodatkowe" showTitleOnMobile={false}>
        <Input
          select
          options={[
            { name: "kwalifikowane", value: "1" },
            { name: "Własne dobrej jakości", value: "0.95" },
            { name: "Własne gorszej jakości", value: "0.9" },
          ]}
          value={PochodzenieNasionValue}
          setValue={setPochodzenieNasionValue}
          title="Pochodzenie nasion"
          placeholder="Wybierz pochodzenie nasion"
          unit=""
        />
        <Input
          select
          options={[
            { name: "idealna", value: "1.00" },
            { name: "sucha", value: "0.92" },
            { name: "zalana", value: "0.90" },
            { name: "zaskorupiająca się", value: "0.94" },
            { name: "zbyt twarda", value: "0.95" },
            { name: "zbyt pulchna", value: "0.920" },
            { name: "NIE DOTYCZY", value: "1" },
          ]}
          value={GlebaValue}
          setValue={setGlebaValue}
          title="Gleba"
          placeholder="Wybierz glebę"
          unit=""
        />
        <Input
          select
          options={[
            { name: "optymalny", value: "1.00" },
            { name: "nieco przyspieszony", value: "1.05" },
            { name: "mocno przyspieszony", value: "1.10" },
            { name: "nieco opóźniony", value: "0.95" },
            { name: "opóźniony", value: "0.90" },
            { name: "mocno opóźniony", value: "0.85" },
            { name: "skrajnie opóźniony", value: "0.80" },
          ]}
          value={TerminSiewuValue}
          setValue={setTerminSiewuValue}
          title="Termin siewu"
          placeholder="Wybierz termin siewu"
          unit=""
        />
        <Input
          select
          options={[
            { name: "mała", value: "0.95" },
            { name: "średnia", value: "1.00" },
            { name: "duża", value: "1.05" },
            { name: "NIE DOTYCZY", value: "1" },
          ]}
          value={KrzewistoscOdmianyValue}
          setValue={setKrzewistoscOdmianyValue}
          title="Krzewistość odmiany"
          placeholder="Wybierz krzewistość odmiany"
          unit=""
        />
      </Section>
      <Section title="Wyniki" showTitleOnMobile={false}>
        <Result title="Wynik:" result={normaSiewuValue} />
        <Input
          number
          value={powierzchniaValue}
          setValue={setPowierzchniaValue}
          title="Oblicz zapotrzebowanie na Twoje pole:"
          placeholder="podaj powierzchnię pola"
          unit="ha"
        />
        <Result title="Zapotrzebowanie:" result={zapotrzebowanieValue} />
      </Section>
    </>
  );
}
