sleep 1
echo  'requesting all heroes'
  curl localhost:3000/heroes 

     
sleep 1
echo  '\n\n\n requesting one heroes'
  curl localhost:3000/heroes/7707da5f-5c9e-405f-a3c9-28fab08fbb3e 

     
sleep 1
echo '\n\n\n requesting with wrong boy'
  curl --silent -X POST \
       --data-binary '{"invalid": "data"}' \
       localhost:3000/heroes 

     
sleep 1
echo '\n\n\n requesting with correct body'
     curl --silent -X POST \
       --data '{"id":"34239e5e-2280-45b2-9473-b7877cd60941", "name":"Izuzo Midorya","age":"15","power":"all for one"}' \
       localhost:3000/heroes 

sleep 1

echo '\n\n\n shold update hero'
  curl --silent -X PATCH \
   -H 'Content-Type: application/json'    --data '{"name":"TESTE"}' \
    localhost:3000/update/34239e5e-2280-45b2-9473-b7877cd60941 
     
sleep 1

echo '\n\n shold delete hero'
  curl --silent -X DELETE \
       localhost:3000/delete/34239e5e-2280-45b2-9473-b7877cd60941 





