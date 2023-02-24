function Profile(props) {
    return (
        <>
        <p>Nama saya <strong>{props.nama}</strong></p>
        <p>umur <strong>{props.umur}</strong></p>
        <p>saya tinggal di <strong>{props.alamat}</strong></p>
        <p>tinggi saya <strong>{props.tinggi}</strong></p>
        <p>berat saya <strong>{props.berat}</strong> cm</p>
        </>
    );
}

export default Profile;