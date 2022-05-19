import axios from "axios";

export const getUbikeInfo = async () => {
   const { data } = await axios.get('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json?fbclid=IwAR2ew2bsrpenLcYNJB7lSILiit4CDU8lnmh_K2_zQieRS6Qm9uSvYTIRMiI');
   return data;
 };
