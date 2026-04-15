import { createClient } from "@supabase/supabase-js";

const anonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3emhzbXNscmphZWVhYnJkampoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwNDk0OTAsImV4cCI6MjA5MTYyNTQ5MH0.sj1dPgJ7Lt7_cyNIQ6KrMc_MYhulYiNOnTe0exbbnFk"
const superbase_url = "https://cwzhsmslrjaeeabrdjjh.supabase.co"

const supabase = createClient(superbase_url, anonkey);

export default function MediaUpload(file) {
    return new Promise(
        (resolve, reject) => {
            if (!file) {
                reject("No file provided");
                return;
            } else {

                //create a unique filename using the current timestamp and the original file name
                const timestamp = new Date() .getTime();
                const uniqueFileName = timestamp + "_" + file.name;

                supabase.storage.from("images").upload(uniqueFileName, file, {
                    cacheControl: "3600",
                    upsert: false
                }).then(
                    () => {
                        const publicUrl = supabase.storage.from("images").getPublicUrl(uniqueFileName).data.publicUrl;
                        console.log(publicUrl);
                        resolve(publicUrl);
                    }
                ).catch(
                    (error) => {
                        console.error("Error uploading file:", error);
                        reject(error);
                    }
                );  

            }
        }
    );
}