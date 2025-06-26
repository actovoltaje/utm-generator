import { useState } from "react";

export default function App() {
  const [urlBase, setUrlBase] = useState("");
  const [tipoCampana, setTipoCampana] = useState("");
  const [nombreCampana, setNombreCampana] = useState("");
  const [fecha, setFecha] = useState("");
  const [pais, setPais] = useState("ES");
  const [contenido, setContenido] = useState("");
  const [utmUrl, setUtmUrl] = useState("");

  const generarUTM = () => {
    const utm_source = "newsletter";
    const utm_medium = "email";
    const utm_campaign = `${tipoCampana}_${nombreCampana}_${fecha}_${pais}`;
    const utm_id = `${tipoCampana}_${nombreCampana}_${fecha}`;
    const utm_content = `${contenido}_${fecha}_${pais}`;
    const utm_term = "%%jobid%%";

    const separator = urlBase.includes("?") ? "&" : "?";
    const finalUrl = `${urlBase}${separator}utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}&utm_content=${utm_content}&utm_term=${utm_term}`;
    setUtmUrl(finalUrl);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Generador de UTM Ducati</h1>
      <input placeholder="URL base" value={urlBase} onChange={e => setUrlBase(e.target.value)} style={{ width: "100%", margin: "0.5rem 0" }} />
      <input placeholder="Tipo campaña (ej: nl, mo...)" value={tipoCampana} onChange={e => setTipoCampana(e.target.value)} style={{ width: "100%", margin: "0.5rem 0" }} />
      <input placeholder="Nombre campaña (ej: desertx_discovery)" value={nombreCampana} onChange={e => setNombreCampana(e.target.value)} style={{ width: "100%", margin: "0.5rem 0" }} />
      <input placeholder="Fecha (AAAAMMDD)" value={fecha} onChange={e => setFecha(e.target.value)} style={{ width: "100%", margin: "0.5rem 0" }} />
      <input placeholder="País (ES o PT)" value={pais} onChange={e => setPais(e.target.value.toUpperCase())} style={{ width: "100%", margin: "0.5rem 0" }} />
      <input placeholder="Tipo contenido (ej: cta_info)" value={contenido} onChange={e => setContenido(e.target.value)} style={{ width: "100%", margin: "0.5rem 0" }} />
      <button onClick={generarUTM} style={{ padding: "0.5rem 1rem", margin: "1rem 0" }}>Generar URL</button>
      {utmUrl && (
        <div style={{ marginTop: "1rem", wordWrap: "break-word", background: "#f0f0f0", padding: "1rem" }}>
          <strong>URL con UTM:</strong>
          <div>{utmUrl}</div>
        </div>
      )}
    </div>
  );
}
