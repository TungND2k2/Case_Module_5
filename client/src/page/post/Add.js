import {Field, Form, Formik} from "formik";

export default function AddBlog() {

    const initialValuesAdd = {
        title: "", content: "", image: "", status: 2, Account: localStorage.id_user,
    };
    const handleSubmit = async (values) => {
    };
    return (<>
        <div style={{textAlign:"center",width:"1000px",height:'100%'}}>
            <div className="heading-page header-text" >
            </div>
            <section className="blog-post">
                <div className="EditorPage__content EditorPage__content--details">
                    <div className="flex1 Paper Paper--double-padded">
                        <Formik initialValues={initialValuesAdd} onSubmit={handleSubmit}>
                            <Form>
                                <div>
                                    <h2>BÀI ĐĂNG MỚI</h2>
                                    <div className="FieldConfigurationField content">
                                        <div className="FieldConfiguration__label" style={{fontFamily: 'inherit'}}>Tiêu
                                            đề
                                        </div>
                                        <div className="FieldConfiguration__value"><Field name="title"
                                                                                          style={{fontFamily: 'inherit'}}
                                                                                          id="title"
                                                                                          className="custom-select custom-select-sm"
                                                                                          id="status"
                                                                                          placeholder="Tên câu chuyện bạn muốn chia sẻ"
                                        /></div>
                                        <div className="content">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <select>
                                                        <option selected>Trạng thái</option>
                                                        <option value="2">Tất cả mọi người</option>
                                                        <option value="1">Chỉ mình tôi</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <select className="custom-select custom-select-sm"
                                                            id="categoryCreate">
                                                        <option selected>Chủ đề</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="FieldConfigurationField ">
                                        <div className="FieldConfiguration__label" style={{fontFamily: 'inherit'}}>Nội
                                            dung
                                        </div>
                                        <div className="FieldConfiguration__value"><Field id="content" name="content"
                                                                                          style={{
                                                                                              width: '100%',
                                                                                              height: '100px'
                                                                                          }}
                                                                                          placeholder="Bạn muốn chia sẻ câu chuyên gì?"
                                        /></div>
                                    </div>
                                    <div className="FieldConfigurationField false">
                                        <div className="FieldConfiguration__label" style={{fontFamily: 'inherit'}}>Ảnh
                                            bìa
                                        </div>
                                        <div className="FieldConfiguration__value">
                                            <div></div>
                                            <Field type="text" name="image"/>
                                        </div>
                                    </div>
                                    <div className="FieldConfiguration__label" style={{fontFamily: 'inherit'}}>Ảnh bìa
                                    </div>
                                    <div className="FieldConfiguration__value">
                                        <div className="col-sm-12 imgUp">
                                            <div className="imagePreview" style={{width: "100%"}}></div>

                                            <label className="btn btn-primary ">
                                                Tải lên
                                                <input type="file" className="uploadFile img" id="image"
                                                       style={{width: '0px',height:' 0px'}} hidden />
                                            </label>
                                        </div>
                                        </div>

                                    <button className="main-button" style={{backgroundColor: '#f48840', width: '100%'}}>
                                        Tạo
                                    </button>

                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </section>
        </div>

    </>)
}