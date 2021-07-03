import Layout from './../components/Layout'

function people() {
  
  return (
    <Layout content={{mission_statement: apiRes.mission_statement, info_title: apiRes.info_title}}>
        <div style={{marginTop: 100, height: '200vh'}}>
            <h3>THIS IS THE PAGE</h3>
        </div>
    </Layout>
  );
}

export default people;
